import { z, defineCollection } from 'astro:content';


//* PROJECTS
const projectSchema = z.object({
  title: z.string(),
  rol: z.string(),
  description: z.string(),
  img: z.object({
    src: z.string(),
    alt: z.string()
  })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: projectSchema
});

export type Project = z.infer<typeof projectSchema>;

//* ========================================== *//

//* EXPERIENCES

const experienceSchema = z.object({
  date: z.string(),
  rol: z.string(),
  company: z.string(),
  location: z.string(),
  description: z.string()
})

const experiencesCollection = defineCollection({
  type: 'data',
  schema: z.array(experienceSchema)
});

export type Experience = z.infer<typeof experienceSchema>

//* ========================================== *//


export const collections = {
  projects: projectsCollection,
  experiences: experiencesCollection
}