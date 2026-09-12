import { readdir, stat, writeFile, rename, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH = 2400;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const RASTER_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

async function compressFile(fullPath, ext) {
  const before = (await stat(fullPath)).size;
  const image = sharp(fullPath);
  const metadata = await image.metadata();

  let pipeline = image;
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH });
  }
  pipeline =
    ext === '.png'
      ? pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

  const buffer = await pipeline.toBuffer();
  if (buffer.length >= before) return { before, after: before, skipped: true };

  const tmpPath = `${fullPath}.tmp`;
  await writeFile(tmpPath, buffer);
  await rename(tmpPath, fullPath).catch(async (err) => {
    await unlink(tmpPath).catch(() => {});
    throw err;
  });
  return { before, after: buffer.length, skipped: false };
}

async function walk(dirPath, onFile) {
  let entries;
  try {
    entries = await readdir(dirPath, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, onFile);
    } else {
      await onFile(fullPath);
    }
  }
}

export async function compressImagesInDir(dirPath) {
  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  await walk(dirPath, async (fullPath) => {
    const ext = path.extname(fullPath).toLowerCase();
    if (!RASTER_EXTENSIONS.has(ext)) return;

    try {
      const result = await compressFile(fullPath, ext);
      totalBefore += result.before;
      totalAfter += result.after;
      if (!result.skipped) {
        count += 1;
        const rel = path.relative(dirPath, fullPath);
        const beforeKB = (result.before / 1024).toFixed(0);
        const afterKB = (result.after / 1024).toFixed(0);
        console.log(`[compress-images] ${rel}: ${beforeKB}KB -> ${afterKB}KB`);
      }
    } catch (err) {
      console.warn(`[compress-images] skipped ${fullPath}:`, err.message);
    }
  });

  if (count > 0) {
    const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
    console.log(`[compress-images] compressed ${count} image(s), saved ${savedMB}MB`);
  }
}

// Allow running directly: node scripts/compress-images.mjs <dir>
if (import.meta.url === `file://${process.argv[1]}`) {
  const target = process.argv[2] ?? 'public/images';
  compressImagesInDir(path.resolve(target));
}
