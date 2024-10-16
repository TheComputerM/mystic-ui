import type { Component } from "solid-js";

const sources = import.meta.glob<string>(
	[
		"../../../components/tailwind/src/stories/**/*.tsx",
		"!../../../components/tailwind/src/stories/**/stories.tsx",
	],
	{
		query: "?raw",
		import: "default",
	},
);

const stories = import.meta.glob<{ default: Component }>([
	"../../../components/tailwind/src/stories/**/*.tsx",
	"!../../../components/tailwind/src/stories/**/stories.tsx",
]);

/**
 * Get the source code of a story
 */
export function getStorySource(
	framework: "tailwind" | "panda",
	component: string,
	name = "default",
) {
	"use server";
	return sources[
		`../../../components/${framework}/src/stories/${component}/${name}.tsx`
	]();
}

/**
 * Get the story component that can be imported and used `lazy(getStory(...))`
 */
export function getStory(component: string, name = "default") {
	// TODO: change from tailwind to panda
	return stories[
		`../../../components/tailwind/src/stories/${component}/${name}.tsx`
	];
}
