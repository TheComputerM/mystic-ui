import path from "node:path";
import { type BunFile, Glob, fileURLToPath } from "bun";
import { componentPandaConfig, componentTailwindConfig } from "./extend-config";
import { extractDependencies } from "./extract-deps";

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
for await (const fileName of tsxGlob.scan(tailwindDirectory)) {
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
		tailwind: componentTailwindConfig(componentName),
		panda: componentPandaConfig(componentName),
		files: [
			{
				name: fileName,
				tailwind: await getContent(tailwindComponentFile),
				panda: await getContent(pandaComponentFile),
			},
		],
	};

	await Bun.write(
		path.join(buildDirectory, `${componentName}.json`),
		JSON.stringify(entry),
	);
}
