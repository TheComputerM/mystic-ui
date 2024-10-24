import { z } from "zod";

export const registryEntrySchema = z.object({
	id: z.string(),
	dependencies: z.string().array().min(1).optional(),
	config: z.any(),
	content: z.string(),
});

export type RegistryEntry = z.infer<typeof registryEntrySchema>;
