import { OG, readImageDataUri, ogDomain, ogAccentBar, ogEyebrow, getOgFonts, renderOgPng } from '../../lib/og-template';

export const prerender = true;

export async function GET() {
  const photo = readImageDataUri('/images/about.jpg');
  const fonts = await getOgFonts();

  const tree = {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        width: '1200px',
        height: '630px',
        background: OG.paper,
        position: 'relative',
      },
      children: [
        // Photo panel
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              width: 440,
              height: '100%',
              borderRight: `2px solid ${OG.line}`,
              alignItems: 'center',
              justifyContent: 'center',
              background: OG.paperDeep,
              overflow: 'hidden',
            },
            children: photo
              ? { type: 'img', props: { src: photo, width: 440, height: 630, style: { objectFit: 'cover' } } }
              : {
                  type: 'span',
                  props: {
                    style: { fontFamily: OG.display, fontWeight: 900, fontSize: 208, color: OG.ink },
                    children: 'HA',
                  },
                },
          },
        },
        // Text panel
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              padding: '0 64px',
              gap: 28,
            },
            children: [
              ogEyebrow('Strategic Design Partner', 34),
              {
                type: 'span',
                props: {
                  style: { fontFamily: OG.display, fontWeight: 900, fontSize: 99, color: OG.ink, lineHeight: 1 },
                  children: 'Herru Adi',
                },
              },
              {
                type: 'span',
                props: {
                  style: { fontFamily: OG.body, fontSize: 60, color: OG.inkSoft, lineHeight: 1.3, maxWidth: 620 },
                  children: "Great design won't save a broken business.",
                },
              },
              { type: 'div', props: { style: { height: 8 } } },
              ogDomain(),
            ],
          },
        },
        ogAccentBar(),
      ],
    },
  };

  return renderOgPng(tree, fonts);
}
