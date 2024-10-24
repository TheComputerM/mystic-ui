import { z } from "zod";

export const registryEntrySchema = z.object({
	name: z.string(),
	dependencies: z.string().array().min(1).optional(),
	tailwind: z.object({
		config: z.any(),
		file: z.string(),
	}),
	panda: z.object({
		config: z.any(),
		file: z.string(),
	}),
});

export type RegistryEntry = z.infer<typeof registryEntrySchema>;
