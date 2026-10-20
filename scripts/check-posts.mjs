#!/usr/bin/env node
// Pre-publish checks for blog posts.
//   npm run check:posts        exits 1 if any post has an error
//   (prebuild)                 same checks, warn-only, so a deploy never breaks on them
import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { readFrontmatter } from './content-dates.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const dir = join(root, 'src/content/blog');
const warnOnly = process.argv.includes('--warn-only');
const str = (v) => (typeof v === 'string' ? v : '');
const EM_DASH = '—';

const files = existsSync(dir) ? readdirSync(dir).filter((n) => n.endsWith('.md')).sort() : [];
let errors = 0;
let warnings = 0;

console.log('check-posts');
for (const name of files) {
  const { data, body } = readFrontmatter(join(dir, name));
  const issues = [];
  const error = (m) => issues.push(['ERROR', m]);
  const warn = (m) => issues.push(['warn ', m]);

  const description = str(data.description).trim();
  const summary = str(data.summary).trim();
  const tags = Array.isArray(data.tags) ? data.tags : [];

  if (!summary || summary.startsWith('PLACEHOLDER')) {
    error('summary is empty or still a placeholder');
  } else if (summary.length < 80) {
    warn(`summary is short (${summary.length} chars), aim for 2-3 full sentences`);
  } else if (summary.length > 450) {
    warn(`summary is long (${summary.length} chars), aim for 2-3 sentences`);
  }

  if (!description) error('description is missing');
  else if (description.length > 170) warn(`description is ${description.length} chars, search results cut it near 160`);

  if (str(data.heroImage) && !str(data.heroImageAlt).trim()) error('heroImage is set but heroImageAlt is empty');
  if (tags.length < 2 || tags.length > 6) warn(`${tags.length} tags, aim for 3 to 5`);

  const h2s = body.split(/\r?\n/).filter((l) => /^##\s+/.test(l));
  if (!h2s.some((l) => /\?\s*$/.test(l))) warn('no H2 phrased as a question (answer engines match on how people ask)');

  const emptyAlt = body.match(/!\[\s*\]\(/g);
  if (emptyAlt) error(`${emptyAlt.length} inline image(s) with empty alt text`);

  const dashes = [str(data.title), description, summary, body].join('\n').split(EM_DASH).length - 1;
  if (dashes > 0) error(`${dashes} em dash(es) found (house rule: none)`);

  if (issues.length === 0) {
    console.log(`  ok     ${name}`);
    continue;
  }
  console.log(`  ${name}`);
  for (const [level, message] of issues) {
    console.log(`    ${level} ${message}`);
    if (level === 'ERROR') errors += 1;
    else warnings += 1;
  }
}
console.log(`${files.length} posts, ${errors} errors, ${warnings} warnings`);
if (errors > 0 && !warnOnly) process.exit(1);
