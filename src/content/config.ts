import { defineCollection, z } from 'astro:content';

const vpsCollection = defineCollection({
  type: 'content', // 'content' for Markdown, 'data' for JSON/YAML
  schema: z.object({
    title: z.string(),
    provider: z.string(),
    location: z.string(),
    price_monthly: z.number(),
    currency: z.enum(['IDR', 'USD', 'AUD']),
    cpu_cores: z.number(),
    ram_gb: z.number(),
    storage_gb: z.number(),
    storage_type: z.string(),
    bandwidth_tb: z.number(),
    virtualization: z.string(),
    status: z.string(),
    last_updated: z.date(),
    tags: z.array(z.string()),
    affiliate_link: z.string().url(),
    raw_yabs_output: z.string(),
    raw_benchsh_output: z.string(),
  }),
});

export const collections = {
  vps: vpsCollection,
}; 