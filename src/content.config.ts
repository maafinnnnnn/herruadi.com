import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    oneliner: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
    gradient: z.string(),
    challenge: z.string(),
    approach: z.string(),
    outcome: z.string(),
    galleryCount: z.number().optional().default(3),
  }),
});

export const collections = { blog, work };
