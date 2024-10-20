import type { RouteDefinition, RouteSectionProps } from "@solidjs/router";
import { allDocs } from "content-collections";
import { createMemo } from "solid-js";
import { Divider } from "styled-system/jsx";
import { StoryPreview } from "~/components/story-preview";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import { getStorySource } from "~/lib/stories";

export const route = {
	preload: async (args) => {
		// preload the story source code
		getStorySource("tailwind", args.params.id, "default");
	},
} satisfies RouteDefinition;

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
			<Heading textStyle="4xl">{doc().title}</Heading>
			<Text color="fg.subtle" textStyle="xl">
				{doc().description}
			</Text>
			<Divider my="6" />
			<StoryPreview component={props.params.id} name="default" />
		</>
	);
}
