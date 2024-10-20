"use server";

import { cache } from "@solidjs/router";
import { highlight } from "./shiki";

/**
 * Get the source code of a story
 */
export const getStorySource = cache(
	async (
		framework: "tailwind" | "panda",
		component: string,
		name = "default",
	) => {
		const source: string = await import(
			`../../../components/${framework}/src/stories/${component}/${name}.tsx?raw`
		).then((module) => module.default);
		return {
			source,
			html: await highlight(source, "tsx"),
		};
	},
	"story-source",
);
