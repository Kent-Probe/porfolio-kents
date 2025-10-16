import { defineCollection, z } from "astro:content";

const proyects = defineCollection({
  schema: z.object({
    title: z.string().min(2).max(100),
    author: z.string().min(2).max(100),
    img: z.string(),
    description: z.string().max(1000),
    link: z.object({
      page: z.string().url().nullable(),
      repo: z.string().url().nullable(),
    }),
    technologies: z.array(z.string()).min(1).max(20),
    year: z.number().min(2000).max(new Date().getFullYear()),
    category: z.enum(["Personal", "Freelance", "Academico", "Laboral"]),
  }),
});

export const collections = { proyects };
