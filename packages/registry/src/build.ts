import path from "node:path";
import { Glob, fileURLToPath } from "bun";
import { componentPandaConfig } from "./panda";
import { registryEntrySchema } from "./schema";
import { componentTailwindConfig } from "./tailwind";
import { extractDependencies } from "./utils";

const frameworks = {
	panda: {
		directory: path.join(
			path.dirname(
				fileURLToPath(import.meta.resolve("@mystic-ui/panda/package.json")),
			),
			"src/ui",
		),
		config: componentPandaConfig,
	},
	tailwind: {
		directory: path.join(
			path.dirname(
				fileURLToPath(import.meta.resolve("@mystic-ui/tailwind/package.json")),
			),
			"src/ui",
		),
		config: componentTailwindConfig,
	},
};

const tsxGlob = new Glob("*.tsx");

async function buildFramework(framework: keyof typeof frameworks) {
	const { directory, config } = frameworks[framework];

	for await (const fileName of tsxGlob.scan(directory)) {
		const componentFile = await Bun.file(path.join(directory, fileName));

		const content = await componentFile.text();
		const npmDependencies = extractDependencies(content);
		const componentName = path.basename(fileName, ".tsx");

		const entry = {
			id: componentName,
			dependencies: npmDependencies,
			config: config(componentName),
			content,
		};

		registryEntrySchema.parse(entry);

		await Bun.write(
			path.join(import.meta.dir, `../${framework}/${componentName}.json`),
			JSON.stringify(entry),
		);
	}
}

for await (const framework of ["panda", "tailwind"] as const) {
	await buildFramework(framework);
}

// for await (const fileName of tsxGlob.scan(pandaDirectory)) {
// 	const tailwindComponentFile = await Bun.file(
// 		path.join(tailwindDirectory, fileName),
// 	);
// 	const pandaComponentFile = await Bun.file(
// 		path.join(pandaDirectory, fileName),
// 	);

// 	const content = await tailwindComponentFile.text();
// 	const npmDependencies = extractDependencies(content);
// 	const componentName = path.basename(fileName, ".tsx");

// 	const entry = {
// 		name: componentName,
// 		dependencies: npmDependencies,
// 		tailwind: {
// 			config: componentTailwindConfig(componentName),
// 			file: await getContent(tailwindComponentFile),
// 		},
// 		panda: {
// 			config: componentPandaConfig(componentName),
// 			file: await getContent(pandaComponentFile),
// 		},
// 	};

// 	registryEntrySchema.parse(entry);

// 	await Bun.write(
// 		path.join(buildDirectory, `${componentName}.json`),
// 		JSON.stringify(entry),
// 	);
// }
