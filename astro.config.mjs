// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import { compressImagesInDir } from './scripts/compress-images.mjs';

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

// https://astro.build/config
export default defineConfig({
  site: 'https://herruadi.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [compressImages()]
});
