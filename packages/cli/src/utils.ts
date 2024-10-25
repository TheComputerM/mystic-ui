import { CommanderError } from "commander";
import { cosmiconfig } from "cosmiconfig";
import { z } from "zod";

export const FRAMEWORKS = ["panda", "tailwind"] as const;

export const configSchema = z
	.object({
		framework: z.enum(FRAMEWORKS),
		outputPath: z.string(),
		configPath: z.string(),
		tailwind: z
			.object({
				aliases: z.object({
					utils: z.string(),
				}),
			})
			.optional(),
	})
	.refine((data) => data.framework === "tailwind" && !data.tailwind, {
		message: "Additional config is required for tailwind framework",
		path: ["tailwind"],
	});

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

	return parsed.data;
}
