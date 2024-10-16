/**
 * Converts tailwind components to panda css only when they have been updated
 */

import { Glob } from "bun";
import { $ } from "bun";
import path from "node:path";

const trackerFile = Bun.file(
	path.join(import.meta.dir, ".components-tracker.json"),
	{ type: "application/json" },
);

if (!trackerFile.name) {
	throw new Error("Tracker file name is null or undefined");
}

if (!(await trackerFile.exists())) {
	await Bun.write(trackerFile.name, "{}");
}

const tracker = await trackerFile.json();

const hasher = new Bun.CryptoHasher("sha3-256");

async function getHash(filePath: string) {
	const file = await Bun.file(filePath);
	const fileContent = await file.text();
	hasher.update(fileContent);
	return hasher.digest("hex");
}

async function transform(filePath: string) {
	const fileHash = await getHash(filePath);
	const fileName = path.basename(filePath);
	if (tracker[filePath] !== fileHash) {
		await $`cp ${filePath} ./src/ui/`;
		await $`tw2panda rewrite ./src/ui/${fileName} -w --tw ../tailwind/tailwind.config.js -c ./panda.config.ts`;
		tracker[filePath] = fileHash;
	}
}

if (typeof Bun.argv[2] === "string") {
	await transform(`../tailwind/src/ui/${Bun.argv[2]}.tsx`);
} else {
	const glob = new Glob("../tailwind/src/ui/*.tsx");

	for await (const file of glob.scan()) {
		await transform(file);
	}
}

Bun.write(trackerFile.name, JSON.stringify(tracker, null, 2));
