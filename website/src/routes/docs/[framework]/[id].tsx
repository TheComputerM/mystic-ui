import type { RouteDefinition, RouteSectionProps } from "@solidjs/router";
import { allDocs } from "content-collections";
import { createMemo } from "solid-js";
import { Divider, Stack } from "styled-system/jsx";
import { InstallationInstructions } from "~/components/installation-instructions";
import { StoryPreview } from "~/components/story-preview";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import { getStorySource } from "~/lib/stories";

export const route = {
	preload: async (args) => {
		// preload the story source code
		getStorySource(
			args.params.framework as "tailwind" | "panda",
			args.params.id,
			"default",
		);
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
		<Stack gap="6">
			<Heading textStyle="4xl">{doc().title}</Heading>
			<Text color="fg.subtle" textStyle="xl">
				{doc().description}
			</Text>
			<StoryPreview
				framework={props.params.framework as "tailwind" | "panda"}
				component={props.params.id}
				name="default"
			/>
			<Divider my="3" />
			<Stack>
				<Heading textStyle="2xl">Installation</Heading>
				<InstallationInstructions component={props.params.id} />
			</Stack>
		</Stack>
	);
}
