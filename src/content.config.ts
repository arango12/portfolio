/**
 * Astro Content Collections Configuration (v5+ API)
 * Defines the strict data schema and loaders for the portfolio projects.
 * Enforces type safety across all Markdown files using Zod.
 */
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  // We use the glob loader to parse local markdown files in the specific directory
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160, "La descripción debe estar optimizada para SEO (máximo 160 caracteres)."),
    techStack: z.array(z.string()),
    
    // URLs are optional, allowing us to hide them if the project is private
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    
    // Crucial for TurinFE: Explicitly mark if the source code is protected
    isPrivateRepo: z.boolean().default(false),
    
    // Used to sort projects in the UI
    order: z.number()
  })
});

/**
 * Export the collections object to register them with Astro.
 */
export const collections = {
  'projects': projectsCollection,
};