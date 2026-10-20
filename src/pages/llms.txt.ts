import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { isPlaceholderSummary } from '../lib/content';
import { personSchema } from '../config/person';

const oneLine = (s: string) => s.replace(/\s+/g, ' ').trim();

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://herruadi.com')).origin;

  const posts = (await getCollection('blog')).sort(
    (a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate),
  );
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);

  const lines = [
    `# ${personSchema.name}`,
    '',
    `> ${personSchema.description}`,
    '',
    `${personSchema.name} is a ${personSchema.jobTitle}. Articles are written in English.`,
    '',
    '## Pages',
    '',
    `- [About](${base}/about): Who I am and how I work`,
    `- [Work](${base}/work): Case studies`,
    `- [Blog](${base}/blog): Articles on product design, service design and strategy`,
    `- [Contact](${base}/contact): How to start a conversation`,
    '',
    '## Articles',
    '',
    ...posts.map((p) => {
      const text = isPlaceholderSummary(p.data.summary) ? p.data.description : p.data.summary;
      return `- [${p.data.title}](${base}/blog/${p.id}/): ${oneLine(text)}`;
    }),
    '',
    '## Case studies',
    '',
    ...work.map((w) => `- [${w.data.title}](${base}/work/${w.id}/): ${oneLine(w.data.oneliner)}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
