import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    category: z.enum(['apps', 'cli', 'skills', 'methodology', 'wip']),
    status: z.enum(['oss', 'local', 'free', 'brewing']),
    tags: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    link: z.string().url().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { works };
