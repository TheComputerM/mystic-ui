/**
 * Converts tailwind components to panda css only when they have been updated
 */

import { Glob } from "bun"
import { $ } from "bun";
import path from "path";

const trackerFile = Bun.file(path.join(import.meta.dir, ".components-tracker.json"), { type: "application/json" });

if (!(await trackerFile.exists())) {
  await Bun.write(trackerFile.name!, "{}")
}

const tracker = await trackerFile.json();

const hasher = new Bun.CryptoHasher("sha3-256");

async function getHash(filePath: string) {
  const file = await Bun.file(filePath);
  const fileContent = await file.text();
  hasher.update(fileContent);
  return hasher.digest("hex");
}

const glob = new Glob("../tailwind/src/ui/*.tsx");

for await (const file of glob.scan()) {
  const fileHash = await getHash(file);
  const fileName = path.basename(file);
  if (tracker[fileName] !== fileHash) {
    await $`cp ${file} ./src/ui/`;
    await $`tw2panda rewrite ./src/ui/${fileName} -w --tw ../tailwind/tailwind.config.js -c ./panda.config.ts`;
    tracker[fileName] = fileHash;
  }
}

Bun.write(trackerFile.name!, JSON.stringify(tracker, null, 2))

