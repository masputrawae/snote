import { CFG } from "./consts.ts"
import { defineCollection } from "astro:content";
import { z } from "astro/zod"
import { glob } from "astro/loaders";

export const collections = {
  vault: defineCollection({
    loader: glob({ base: CFG.vaultDir, pattern: "**/*.{md,mdx}" }),
    schema: z.record(z.string(), z.any()).optional()
  })
}

