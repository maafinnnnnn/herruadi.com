import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The CMS writes an empty string (e.g. `updatedDate: ''`) when an
// optional field is left blank instead of omitting the key, so treat
// an empty string as "not set" for types stricter than plain string.
const optionalDate = z.preprocess((val) => (val === '' ? undefined : val), z.date().optional());
const optionalUrl = z.preprocess((val) => (val === '' ? undefined : val), z.string().url().optional());

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    pubDate: z.date(),
    updatedDate: optionalDate,
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    oneliner: z.string(),
    summary: z.string(),
    updatedDate: optionalDate,
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
    gradient: z.string(),
    thumb: z.string().optional(),
    liveUrl: optionalUrl,
    challenge: z.string(),
    approach: z.string(),
    fieldResearch: z
      .object({
        body: z.string(),
        postSlug: z.string(),
      })
      .optional(),
    outcome: z.string(),
    galleryCount: z.number().optional().default(3),
    galleryRatio: z.string().optional().default('1440/1024'),
    gallery: z
      .array(z.object({ src: z.string(), label: z.string().optional() }))
      .optional()
      .default([]),
  }),
});

export const collections = { blog, work };
