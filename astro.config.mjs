// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { compressImagesInDir } from './scripts/compress-images.mjs';
import { collectLastmods } from './scripts/content-dates.mjs';

/** Compresses everything under dist/images after the static build finishes. */
function compressImages() {
  return {
    name: 'compress-images',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        await compressImagesInDir(path.join(outDir, 'images'));
      },
    },
  };
}

// pathname -> lastmod from each post's updatedDate / pubDate
const lastmods = collectLastmods(fileURLToPath(new URL('.', import.meta.url)));

// https://astro.build/config
export default defineConfig({
  site: 'https://herruadi.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [compressImages(), sitemap({
      serialize(item) {
        const lastmod = lastmods.get(new URL(item.url).pathname);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    })]
});
