// Fetches Google Fonts as TrueType buffers for satori/@vercel/og, which
// can't parse the woff2 files browsers normally get. Requesting with an
// old User-Agent makes Google's CSS API respond with .ttf URLs instead.
const OLD_UA =
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/538.1 (KHTML, like Gecko) Chrome/22.0.1216.0 Safari/538.1';

const cache = new Map<string, Promise<ArrayBuffer>>();

async function fetchGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`;
  const css = await fetch(cssUrl, { headers: { 'User-Agent': OLD_UA } }).then((res) => res.text());

  const match = css.match(/src: url\(([^)]+)\)\s*format\('(\w+)'\)/);
  if (!match) {
    throw new Error(`og-fonts: could not resolve a font file URL for ${family} ${weight}`);
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}

export function getGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const key = `${family}-${weight}`;
  if (!cache.has(key)) {
    const promise = fetchGoogleFont(family, weight);
    // Don't let a transient network blip poison the cache forever —
    // drop the failed entry so the next call actually retries.
    promise.catch(() => cache.delete(key));
    cache.set(key, promise);
  }
  return cache.get(key)!;
}
