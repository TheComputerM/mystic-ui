import { CommanderError } from "commander";
import { cosmiconfig } from "cosmiconfig";
import { z } from "zod";

export const FRAMEWORKS = ["panda", "tailwind"] as const;

const baseSchema = z.object({ outputPath: z.string(), configPath: z.string() });

export const configSchema = z.discriminatedUnion("framework", [
	z.object({ framework: z.literal("panda") }).merge(baseSchema),
	z
		.object({
			framework: z.literal("tailwind"),
			tailwind: z.object({ aliases: z.object({ utils: z.string() }) }),
		})
		.merge(baseSchema),
]);

// export const configSchema = z
// 	.object({
// 		framework: z.enum(FRAMEWORKS),
// 		outputPath: z.string(),
// 		configPath: z.string(),
// 		tailwind: z
// 			.object({
// 				aliases: z.object({
// 					utils: z.string(),
// 				}),
// 			})
// 			.optional(),
// 	})
// 	.superRefine((val, ctx) => {
// 		// If the framework is tailwind, the tailwind config is required
// 		if (val.framework === "tailwind" && !val.tailwind) {
// 			ctx.addIssue({
// 				code: "custom",
// 				message: "Additional config is required for tailwind framework",
// 				path: ["tailwind"],
// 			});
// 		}
// 	});

export type ConfigSchema = z.infer<typeof configSchema>;

/**
 * Get the mystic config from the project
 */
export async function getMysticConfig() {
	const explorer = cosmiconfig("mystic", {
		searchPlaces: ["mystic.config.json", ".config/mystic.config.json"],
		searchStrategy: "project",
	});
	const result = await explorer.search();

	if (!result) {
		throw new CommanderError(
			1,
			"no-config",
			"No mystic.config.json found, generate one using the init command.",
		);
	}

	const parsed = configSchema.safeParse(result.config);

	if (!parsed.success) {
		throw new CommanderError(
			1,
			"invalid-config",
			`${parsed.error.message}\nYour mystic.config.json is outdated/invalid, please update it.`,
		);
	}

	return { config: parsed.data, filepath: result.filepath };
}
