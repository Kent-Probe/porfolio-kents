import { defineCollection, z } from "astro:content";

const proyects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(2).max(100),
    author: z.string().min(2).max(100),
    img: z.string().url(),
    description: z.string().max(500),
    link: {
      page: z.string().url().optional(),
      repo: z.string().url().optional(),
    },
    technologies: z.array(z.string()).min(1).max(20),
    year: z.number().min(2000).max(new Date().getFullYear()),
    category: z.enum(["Personal", "Freelance", "Academico", "Laboral"]),
  }),
});

export const collections = { proyects };
