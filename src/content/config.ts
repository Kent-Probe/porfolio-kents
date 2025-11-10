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

const education = defineCollection({
  schema: z.object({
    title: z.string().min(2).max(100),
    institution: z.string().min(2).max(100),
    degree: z.string().min(2).max(100),
    initialDate: z.string().min(4).max(20),
    endDate: z.string().min(4).max(20).nullable(),
    description: z.string().max(1000),
    link: z.string().url().nullable(),
    imgs: z.array(z.string()).min(1).max(10).nullable(),
  }),
});

export const collections = { proyects, education };
