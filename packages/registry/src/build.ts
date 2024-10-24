import path from "node:path";
import { type BunFile, Glob, fileURLToPath } from "bun";
import { componentPandaConfig, componentTailwindConfig } from "./extend-config";
import { extractDependencies } from "./extract-deps";
import { registryEntrySchema } from "./schema";

const tailwindDirectory = path.join(
	path.dirname(
		fileURLToPath(import.meta.resolve("@mystic-ui/tailwind/package.json")),
	),
	"src/ui",
);

const pandaDirectory = path.join(
	path.dirname(
		fileURLToPath(import.meta.resolve("@mystic-ui/panda/package.json")),
	),
	"src/ui",
);

const buildDirectory = path.join(import.meta.dir, "../build");

async function getContent(file: BunFile) {
	if (!(await file.exists())) {
		return undefined;
	}
	return await file.text();
}

const tsxGlob = new Glob("*.tsx");
for await (const fileName of tsxGlob.scan(pandaDirectory)) {
	const tailwindComponentFile = await Bun.file(
		path.join(tailwindDirectory, fileName),
	);
	const pandaComponentFile = await Bun.file(
		path.join(pandaDirectory, fileName),
	);

	const content = await tailwindComponentFile.text();
	const npmDependencies = extractDependencies(content);
	const componentName = path.basename(fileName, ".tsx");

	const entry = {
		name: componentName,
		dependencies: npmDependencies,
		tailwind: {
			config: componentTailwindConfig(componentName),
			file: await getContent(tailwindComponentFile),
		},
		panda: {
			config: componentPandaConfig(componentName),
			file: await getContent(pandaComponentFile),
		},
	};

	registryEntrySchema.parse(entry);

	await Bun.write(
		path.join(buildDirectory, `${componentName}.json`),
		JSON.stringify(entry),
	);
}
