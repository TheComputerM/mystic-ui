import { Title } from "@solidjs/meta";
import type { RouteDefinition, RouteSectionProps } from "@solidjs/router";
import { allDocs } from "content-collections";
import { createMemo } from "solid-js";
import { InstallationInstructions } from "~/components/docs/installation-instructions";
import { StoryPreview } from "~/components/docs/story-preview";
import { getStorySource } from "~/lib/stories";
import { useMDXComponents } from "~/tools/solid-mdx";

export const route = {
	preload: async (args) =>
		await Promise.all([
			// preload the story source code
			getStorySource(
				args.params.framework as "tailwind" | "panda",
				args.params.id,
				"default",
			),
		]),
} satisfies RouteDefinition;

const MDXComponents = useMDXComponents();

export default function PandaDocsPage(props: RouteSectionProps) {
	const doc = createMemo(() => {
		const document = allDocs.find((doc) => doc._meta.path === props.params.id);
		if (!document) {
			throw new Error("Document not found");
		}
		return document;
	});

	return (
		<>
			<Title>{doc().title} component | Mystic UI</Title>
			<MDXComponents.h1>{doc().title}</MDXComponents.h1>
			<MDXComponents.p textStyle="xl">{doc().description}</MDXComponents.p>
			<MDXComponents.hr />
			<StoryPreview
				framework={props.params.framework as "tailwind" | "panda"}
				component={props.params.id}
				name="default"
			/>
			<MDXComponents.hr />
			<MDXComponents.h2>Installation</MDXComponents.h2>
			<InstallationInstructions component={props.params.id} />
		</>
	);
}
