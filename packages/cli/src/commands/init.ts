import fs from "node:fs";
import path from "node:path";
import * as p from "@clack/prompts";
import { cosmiconfig } from "cosmiconfig";
import { FRAMEWORKS, configSchema, getMysticConfig } from "../utils";

/**
 * Detects the CSS framework used in the project
 */
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
	return configs.find((config) => config.result !== null);
}

/**
 * Wrapper around p.group that exits the process on cancel
 */
async function promptGroup<T>(prompts: p.PromptGroup<T>) {
	return p.group(prompts, {
		onCancel: () => {
			p.cancel("Operation cancelled.");
			process.exit(0);
		},
	});
}

/**
 * Creates a mystic.config.json file by asking prompts
 */
async function createConfig() {
	p.intro("Welcome to Mystic UI");

	const resolvedConfig = await detectFramework();

	const config = await promptGroup({
		framework: () =>
			p.select({
				message: "Which CSS framework are you using?",
				options: FRAMEWORKS.map((value) => ({ label: value, value })),
				initialValue: resolvedConfig?.framework,
			}),
		configPath: ({ results }) =>
			p.text({
				message: "Where is your CSS framework config?",
				initialValue: resolvedConfig?.result
					? path.relative(process.cwd(), resolvedConfig.result.filepath)
					: `${results.framework}.config.ts`,
				validate(value) {
					if (!value) return "Please enter a path.";
					if (!fs.existsSync(path.join(process.cwd(), value)))
						return "File doesn't exist. Init your CSS framework config first.";
				},
			}),
		outputPath: () =>
			p.text({
				message: "Where would you like to store your components?",
				initialValue: "./src/components/mystic-ui/",
				validate(value) {
					if (!value) return "Please enter a path.";
					if (!value.startsWith("."))
						return "Please enter a relative path to the project root.";
				},
			}),
		tailwind: ({ results }) => {
			if (results.framework !== "tailwind") {
				return undefined;
			}
			return promptGroup({
				aliases: () =>
					promptGroup({
						utils: () =>
							p.text({
								message: "Import alias for where the cn utility is located",
								initialValue: "@/lib/utils",
								validate(value) {
									if (!value) return "Please enter a path.";
								},
							}),
					}),
			});
		},
	});

	configSchema.parse(config);

	fs.writeFileSync("mystic.config.json", JSON.stringify(config, null, 2));

	p.outro("You're all set!");
}

export default async function initCommand() {
	try {
		// check if a mystic.config.json already exists
		await getMysticConfig();
		console.log(
			"A valid config is already present. Delete it if you want to regenerate the config.",
		);
	} catch {
		// create a new config file
		await createConfig();
	}
}
