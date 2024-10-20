import { defineCollection, defineConfig } from "@content-collections/core";
import { compile } from "@mdx-js/mdx";
import path from "node:path";
import { writeFile, mkdir } from "node:fs/promises";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

await mkdir("./.content-collections/generated/docs", { recursive: true });
const docs = defineCollection({
	name: "docs",
	directory: "src/content/docs",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
		description: z.string(),
	}),
	async transform(document, context) {
		// const jsxPath = await context.cache(document.content, async (content) => {
		// 	const vfile = await compile(content, {
		// 		jsx: true,
		// 		jsxImportSource: "solid-js/h",
		// 		providerImportSource: "~/tools/solid-mdx.ts",
		// 		remarkPlugins: [remarkGfm],
		// 		rehypePlugins: [rehypeSlug],
		// 		elementAttributeNameCase: "html",
		// 		outputFormat: "program",
		// 		development: process.env.NODE_ENV === "development",
		// 		baseUrl: path.join(
		// 			context.collection.directory,
		// 			document._meta.filePath,
		// 		),
		// 	});
		// 	const output = String(vfile);
		// 	const filePath = `./.content-collections/generated/${context.collection.name}/${document._meta.fileName.replace(".mdx", ".jsx")}`;
		// 	await writeFile(filePath, output);
		// 	return filePath;
		// });

		return {
			...document,
			// jsxPath,
		};
	},
});

export default defineConfig({
	collections: [docs],
});
