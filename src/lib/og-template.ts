import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Redline design tokens (dark values — OG cards always render dark
// regardless of the viewer's site theme, same as a printed exhibit).
export const OG = {
  paper: '#14160f',
  paperDeep: '#1b1e14',
  ink: '#eaede1',
  inkSoft: '#a2a893',
  inkFaint: '#656b58',
  line: '#333827',
  redline: '#ff6e55',
  display: 'Big Shoulders Display',
  mono: 'IBM Plex Mono',
  body: 'IBM Plex Sans',
};

export function readImageDataUri(publicRelativePath: string, mime = 'image/jpeg'): string | null {
  const filePath = join(process.cwd(), 'public', publicRelativePath);
  if (!existsSync(filePath)) return null;
  const buf = readFileSync(filePath);
  return `data:${mime};base64,${buf.toString('base64')}`;
}

// Small bordered avatar + name, used bottom-left on every OG template.
export function ogAvatarRow(photoDataUri: string | null) {
  return {
    type: 'div',
    props: {
      style: { display: 'flex', alignItems: 'center', gap: 14 },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              width: 48,
              height: 48,
              border: `2px solid ${OG.ink}`,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              background: OG.paperDeep,
            },
            children: photoDataUri
              ? {
                  type: 'img',
                  props: { src: photoDataUri, width: 48, height: 48, style: { objectFit: 'cover' } },
                }
              : {
                  type: 'span',
                  props: {
                    style: { fontFamily: OG.display, fontWeight: 800, fontSize: 18, color: OG.ink },
                    children: 'HA',
                  },
                },
          },
        },
        {
          type: 'span',
          props: {
            style: { fontFamily: OG.display, fontWeight: 700, fontSize: 22, color: OG.ink },
            children: 'Herru Adi',
          },
        },
      ],
    },
  };
}

export function ogDomain() {
  return {
    type: 'span',
    props: {
      style: {
        fontFamily: OG.mono,
        fontSize: 16,
        letterSpacing: 1,
        color: OG.inkFaint,
      },
      children: 'herruadi.com',
    },
  };
}

export function ogAccentBar() {
  return {
    type: 'div',
    props: {
      style: { display: 'flex', position: 'absolute', left: 0, right: 0, bottom: 0, height: 6, background: OG.redline },
    },
  };
}

export function ogEyebrow(text: string) {
  return {
    type: 'span',
    props: {
      style: {
        fontFamily: OG.mono,
        fontSize: 20,
        letterSpacing: 3,
        textTransform: 'uppercase',
        color: OG.redline,
      },
      children: text,
    },
  };
}

export async function renderOgPng(tree: unknown, fonts: unknown): Promise<Response> {
  const satori = (await import('satori')).default;
  const { Resvg } = await import('@resvg/resvg-js');

  const svg = await satori(tree as any, { width: 1200, height: 630, fonts: fonts as any });
  const png = new Resvg(svg).render().asPng();

  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}

export async function getOgFonts() {
  const { getGoogleFont } = await import('./og-fonts');
  const [displayBold, displayBlack, mono] = await Promise.all([
    getGoogleFont('Big Shoulders Display', 700),
    getGoogleFont('Big Shoulders Display', 900),
    getGoogleFont('IBM Plex Mono', 500),
  ]);
  return [
    { name: 'Big Shoulders Display', data: displayBold, weight: 700 as const, style: 'normal' as const },
    { name: 'Big Shoulders Display', data: displayBlack, weight: 900 as const, style: 'normal' as const },
    { name: 'IBM Plex Mono', data: mono, weight: 500 as const, style: 'normal' as const },
  ];
}
