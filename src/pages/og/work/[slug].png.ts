import { getCollection } from 'astro:content';
import { OG, readImageDataUri, ogAvatarRow, ogDomain, ogAccentBar, ogEyebrow, getOgFonts, renderOgPng } from '../../../lib/og-template';

export const prerender = true;

export async function getStaticPaths() {
  const projects = await getCollection('work');
  return projects.map((project) => ({ params: { slug: project.id }, props: { project } }));
}

export async function GET({ props }: { props: { project: Awaited<ReturnType<typeof getCollection>>[number] } }) {
  const { project } = props;
  const photo = readImageDataUri('/images/about.jpg');
  const fonts = await getOgFonts();

  const tree = {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '1200px',
        height: '630px',
        background: OG.paper,
        padding: '64px 72px',
        position: 'relative',
      },
      children: [
        ogEyebrow('Case Study'),
        {
          type: 'div',
          props: {
            style: { display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', gap: 16 },
            children: [
              {
                type: 'span',
                props: {
                  style: { fontFamily: OG.display, fontWeight: 900, fontSize: 135, color: OG.ink, lineHeight: 1 },
                  children: project.data.title,
                },
              },
              {
                type: 'span',
                props: {
                  style: { fontFamily: OG.body, fontSize: 46, color: OG.inkSoft, maxWidth: 1000 },
                  children: project.data.label,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
            children: [ogAvatarRow(photo), ogDomain()],
          },
        },
        ogAccentBar(),
      ],
    },
  };

  return renderOgPng(tree, fonts);
}
