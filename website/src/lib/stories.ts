import { cache } from "@solidjs/router";
import type { Component } from "solid-js";
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
		"use server";

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

const stories = import.meta.glob<{ default: Component }>([
	"../../../components/panda/src/stories/**/*.tsx",
	"!../../../components/panda/src/stories/**/stories.tsx",
]);

/**
 * Get the story component that can be imported and used `lazy(getStory(...))`
 */
export function getStory(component: string, name = "default") {
	// only panda stories are used cause well, the website uses panda css
	return stories[
		`../../../components/panda/src/stories/${component}/${name}.tsx`
	];
}
