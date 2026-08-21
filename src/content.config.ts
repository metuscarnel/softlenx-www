import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    theme: z.string(),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
        detail: z.string().optional(),
      })
    ),
    methodology: z.array(z.string()),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  articles: articleCollection,
};
