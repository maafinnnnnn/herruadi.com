import { getCollection } from 'astro:content';
import { OG, readImageDataUri, ogAvatarRow, ogDomain, ogAccentBar, ogEyebrow, getOgFonts, renderOgPng } from '../../../lib/og-template';

export const prerender = true;

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export async function GET({ props }: { props: { post: Awaited<ReturnType<typeof getCollection>>[number] } }) {
  const { post } = props;
  const photo = readImageDataUri('/images/about.jpg');
  const fonts = await getOgFonts();

  // Satori's text layout doesn't clip long titles for us — keep it to
  // roughly two Big Shoulders lines at this width ourselves.
  const title = post.data.title.length > 84 ? `${post.data.title.slice(0, 81).trimEnd()}…` : post.data.title;

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
        ogEyebrow(post.data.category),
        {
          type: 'div',
          props: {
            style: { display: 'flex', flex: 1, alignItems: 'center' },
            children: {
              type: 'span',
              props: {
                style: {
                  fontFamily: OG.display,
                  fontWeight: 800,
                  fontSize: 81,
                  lineHeight: 1.08,
                  color: OG.ink,
                  maxWidth: 1000,
                },
                children: title,
              },
            },
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
