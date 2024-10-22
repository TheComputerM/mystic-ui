import fs from "node:fs/promises";
import * as p from "@clack/prompts";
import { cosmiconfig } from "cosmiconfig";
import { type ConfigSchema, FRAMEWORKS, getMysticConfig } from "../utils";

async function detectFramework() {
	const configs = await Promise.all(
		FRAMEWORKS.map((framework) => ({
			framework,
			explorer: cosmiconfig(framework, { searchStrategy: "project" }),
		})).map(async ({ framework, explorer }) => ({
			framework,
			result: await explorer.search(),
		})),
	);
	const resolvedConfig = configs.find((config) => config.result !== null);
	if (resolvedConfig) {
		return resolvedConfig.framework;
	}
	return undefined;
}

async function createConfig() {
	p.intro("Welcome to Mystic UI");
	const group = await p.group(
		{
			framework: async () =>
				p.select({
					message: "Which CSS framework do you use?",
					options: FRAMEWORKS.map((value) => ({ label: value, value })),
					initialValue: await detectFramework(),
				}),
			outputPath: () =>
				p.text({
					message: "Where would you like to store your components?",
					initialValue: "./src/components/mystic-ui",
					validate: (value) => {
						if (!value) return "Please enter a path.";
						if (!value.startsWith("."))
							return "Please enter a relative path to the project root.";
					},
				}),
		},
		{
			onCancel: () => {
				p.cancel("Operation cancelled.");
				process.exit(0);
			},
		},
	);
	p.outro("You're all set!");

	const config: ConfigSchema = {
		framework: group.framework,
		outputPath: group.outputPath,
	};

	await fs.writeFile("mystic.config.json", JSON.stringify(config, null, 2));
}

export default async function init() {
	const config = await getMysticConfig();
	if (config) {
		console.log("Config file already exists.");
	} else {
		await createConfig();
	}
}
