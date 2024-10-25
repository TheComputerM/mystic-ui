import fs from "node:fs/promises";
import path from "node:path";
import { intro, outro, spinner } from "@clack/prompts";
import type { RegistryEntry } from "@mystic-ui/registry/src/schema";
import { CommanderError } from "commander";
import { loadFile, writeFile } from "magicast";
import { deepMergeObject } from "magicast/helpers";
import { addDependency, installDependencies } from "nypm";
import { type ConfigSchema, getMysticConfig } from "../utils";

/**
 * Fetches the registry entry for a component from github
 * @param framework name of CSS framework
 * @param component id of component
 * @returns registry entry for the component
 */
async function getRegistryEntry(
	framework: ConfigSchema["framework"],
	component: string,
) {
	try {
		const response = await fetch(
			`https://raw.githubusercontent.com/TheComputerM/mystic-ui/main/packages/registry/${framework}/${component}.json`,
		);
		return (await response.json()) as RegistryEntry;
	} catch {
		throw new CommanderError(
			1,
			"fetch-fail",
			`Component ${component} not found for framework ${framework} in registry.`,
		);
	}
}

async function updateConfig(filePath: string, config: object) {
	try {
		const mod = await loadFile(filePath);
		deepMergeObject(mod.exports.default, config);
		await writeFile(mod, filePath);
	} catch {
		console.error(`Unable to update ${filePath}`);
		console.error(
			"Please update the file manually with the following content:",
		);
		console.log(JSON.stringify(config, null, 2));
	}
}

export function transform(content: string, config: ConfigSchema) {
	let output = content;
	if (config.framework === "tailwind") {
		// Modify import paths to match project configured aliases
		const DEFAULT_IMPORTS = {
			utils: "@/lib/utils",
		};
		output = output.replace(
			DEFAULT_IMPORTS.utils,
			config.tailwind!.aliases.utils,
		);
	}
	return output;
}

/**
 * Adds a component to the project
 * @param component id of component
 */
export default async function addComponentCommand(component: string) {
	intro(`Adding ${component}`);

	const config = await getMysticConfig();
	const s = spinner();

	s.start("Fetching component details");
	const entry = await getRegistryEntry(config.framework, component);
	s.stop("Fetched component details");

	if (entry.dependencies) {
		s.start("Installing dependencies");
		await addDependency(entry.dependencies);
		await installDependencies();
		s.stop(`Installed ${entry.dependencies.join(", ")}`);
	}

	if (entry.config) {
		s.start("Updating config file");
		await updateConfig(
			path.join(process.cwd(), config.configPath),
			entry.config,
		);
		s.stop("Updated config file");
	}

	s.start("Writing component files");
	await fs.mkdir(path.join(process.cwd(), config.outputPath), {
		recursive: true,
	});
	await fs.writeFile(
		path.join(process.cwd(), config.outputPath, `${component}.tsx`),
		transform(entry.content, config),
	);
	s.stop("Wrote component files");

	outro("Component added successfully");
}
