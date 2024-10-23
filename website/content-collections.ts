import { defineCollection, defineConfig } from "@content-collections/core";

const pages = defineCollection({
	name: "pages",
	directory: "src/content/pages",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
	}),
});

const docs = defineCollection({
	name: "docs",
	directory: "src/content/docs",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
		description: z.string(),
		category: z.enum([
			"text",
			"background",
			"component",
			"device-mock",
			"effect",
		]),
	}),
});

export default defineConfig({
	collections: [pages, docs],
});
