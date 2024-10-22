import { cosmiconfig } from "cosmiconfig";
import { z } from "zod";

export const FRAMEWORKS = ["panda", "tailwind"] as const;

export const configSchema = z.object({
	framework: z.enum(FRAMEWORKS),
	outputPath: z.string(),
});

export type ConfigSchema = z.infer<typeof configSchema>;

export async function getMysticConfig() {
	const explorer = cosmiconfig("mystic", {
		searchPlaces: ["mystic.config.json", ".config/mystic.config.json"],
		searchStrategy: "project",
	});
	const result = await explorer.search();
	return result;
}

export function validateMysticConfig(config: unknown) {
	const result = configSchema.safeParse(config);
	if (result.success) {
		return result.data;
	}
	return undefined;
}
