/**
 * Converts tailwind components to panda css only when they have been updated
 */

import { Glob, $ } from "bun";
import path from "node:path";

const trackerFile = Bun.file(
	path.join(import.meta.dir, ".components-tracker.json"),
	{ type: "application/json" },
);

const tracker = (await trackerFile.exists()) ? await trackerFile.json() : {};

async function updateTrackerFile() {
	if (trackerFile.name) {
		await Bun.write(trackerFile.name, JSON.stringify(tracker, null, 2));
	} else {
		throw new Error("Tracker file name is null or undefined");
	}
}

const hasher = new Bun.CryptoHasher("sha3-256");

async function getHash(filePath: string) {
	const file = await Bun.file(filePath);
	const fileContent = await file.text();
	hasher.update(fileContent);
	return hasher.digest("hex");
}

async function trackFile(filePath: string, writeFile: boolean) {
	const fileHash = await getHash(filePath);
	if (tracker[filePath] !== fileHash) {
		tracker[filePath] = fileHash;
		console.log(`Tracked ${filePath}`);
		if (writeFile) {
			const relativePath = path.relative("../tailwind/src/", filePath);
			await $`mkdir -p ./src/${path.dirname(relativePath)}`;
			await $`cp ../tailwind/src/${relativePath} ./src/${relativePath}`;
			await $`tw2panda rewrite ./src/${relativePath} -w --tw ../tailwind/tailwind.config.js -c ./panda.config.ts`;
			console.log(`Converted ${relativePath}`);
		}
	}
	await updateTrackerFile();
}

async function track(trackPath: string, writeFile = true) {
	const glob = new Glob(`../tailwind/src/${trackPath}*.tsx`);
	for await (const file of glob.scan()) {
		await trackFile(file, writeFile);
	}
}

if (Bun.argv.length < 3) {
	throw new Error("Provide a subcommand");
}

if (Bun.argv[2] === "sync") {
	// Converts a tailwind component to panda css

	await track(Bun.argv[3]);
} else if (Bun.argv[2] === "force") {
	// Forces hash update in the tracker for the component

	await track(Bun.argv[3], false);
} else if (Bun.argv[2] === "check") {
	// Checks for updated tailwind components

	const glob = new Glob("../tailwind/src/{ui,stories}/**/*.tsx");
	for await (const file of glob.scan()) {
		if ((await getHash(file)) !== tracker[file]) {
			console.log(file);
		}
	}
} else {
	throw new Error("Invalid subcommand");
}
