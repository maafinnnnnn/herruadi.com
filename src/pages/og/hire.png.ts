import { hireId } from '../../config/hire/id';
import { OG, ogDomain, ogAccentBar, getOgFonts, renderOgPng } from '../../lib/og-template';

export const prerender = true;

// Type-only card (no photo) so the title stays large enough to read at
// LinkedIn / WhatsApp thumbnail sizes. The second title line uses the same
// treatment as the homepage hero highlight: accent block, dark text.
const TITLE_SIZE = 156;

export async function GET() {
  const fonts = await getOgFonts();
  const [first, second] = hireId.og.title;
  // Break the subtitle before its last segment so the line never wraps mid-phrase.
  const parts = hireId.og.subtitle.split(' · ');
  const subtitleLines = [parts.slice(0, -1).join(' · '), parts[parts.length - 1]];

  const titleLine = (text: string, color: string) => ({
    type: 'span',
    props: {
      style: {
        fontFamily: OG.display,
        fontWeight: 900,
        fontSize: TITLE_SIZE,
        lineHeight: 0.98,
        letterSpacing: -2,
        textTransform: 'uppercase',
        color,
        whiteSpace: 'nowrap',
      },
      children: text,
    },
  });

  const tree = {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '1200px',
        height: '630px',
        background: OG.paper,
        position: 'relative',
        padding: '44px 72px 56px',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
            children: [
              titleLine(first, OG.ink),
              {
                type: 'div',
                props: {
                  style: { display: 'flex', background: OG.redline, padding: '0 22px', marginTop: 6 },
                  children: titleLine(second, OG.paper),
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column', gap: 18 },
            children: [
              {
                type: 'div',
                props: {
                  style: { display: 'flex', flexDirection: 'column', fontFamily: OG.body, fontSize: 40, lineHeight: 1.25, color: OG.ink },
                  children: subtitleLines.map((line) => ({ type: 'span', props: { children: line } })),
                },
              },
              ogDomain(hireId.og.domain),
            ],
          },
        },
        ogAccentBar(),
      ],
    },
  };

  return renderOgPng(tree, fonts);
}
