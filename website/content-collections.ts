import { defineCollection, defineConfig } from "@content-collections/core";

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
		};
	},
});

export default defineConfig({
	collections: [docs],
});
