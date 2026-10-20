// Shared build-time helpers: a tiny frontmatter reader (no YAML dependency)
// and the pathname -> lastmod map used by the sitemap.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function unquote(value) {
  const v = value.trim();
  if (v.length >= 2 && v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1).replace(/''/g, "'");
  if (v.length >= 2 && v.startsWith('"') && v.endsWith('"')) {
    try {
      return JSON.parse(v);
    } catch {
      return v.slice(1, -1);
    }
  }
  return v;
}

/** Reads the flat frontmatter the CMS writes: scalars, quoted/folded scalars and string lists. */
export function readFrontmatter(file) {
  const raw = readFileSync(file, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const data = {};
  let key = null;
  let mode = null; // 'list' | 'scalar'
  let buffer = '';
  const flush = () => {
    if (key && mode === 'scalar') data[key] = unquote(buffer);
    key = null;
    mode = null;
    buffer = '';
  };

  for (const line of match[1].split(/\r?\n/)) {
    const top = line.match(/^([A-Za-z0-9_]+):(?:\s+(.*))?$/);
    if (top) {
      flush();
      key = top[1];
      const rest = (top[2] ?? '').trim();
      if (rest === '') {
        data[key] = [];
        mode = 'list';
      } else if (/^[>|][+-]?$/.test(rest)) {
        mode = 'scalar';
        buffer = '';
      } else {
        mode = 'scalar';
        buffer = rest;
      }
      continue;
    }
    if (!key) continue;
    const item = line.match(/^\s*-\s+(.*)$/);
    if (mode === 'list' && item) {
      data[key].push(unquote(item[1]));
      continue;
    }
    if (mode === 'scalar' && line.trim() !== '') buffer = buffer ? `${buffer} ${line.trim()}` : line.trim();
  }
  flush();
  return { data, body: match[2] };
}

const toISO = (value) => {
  if (typeof value !== 'string' || value.trim() === '') return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
};

/**
 * Map of sitemap pathname -> ISO lastmod, taken from updatedDate (or pubDate)
 * in the content files. The /blog/ index gets the newest post date.
 */
export function collectLastmods(root) {
  const out = new Map();
  const collections = [
    { dir: 'src/content/blog', base: '/blog/', index: true },
    { dir: 'src/content/work', base: '/work/', index: false },
  ];
  for (const { dir, base, index } of collections) {
    const abs = join(root, dir);
    if (!existsSync(abs)) continue;
    let newest;
    for (const name of readdirSync(abs).filter((n) => n.endsWith('.md'))) {
      const { data } = readFrontmatter(join(abs, name));
      const iso = toISO(data.updatedDate) ?? toISO(data.pubDate);
      if (!iso) continue;
      out.set(`${base}${name.replace(/\.md$/, '').toLowerCase()}/`, iso);
      if (!newest || iso > newest) newest = iso;
    }
    if (index && newest) out.set(base, newest);
  }
  return out;
}
