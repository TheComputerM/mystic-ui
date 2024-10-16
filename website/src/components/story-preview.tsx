import { createAsync } from "@solidjs/router";
import { type Component, lazy } from "solid-js";
import { Box } from "styled-system/jsx";
import { getStory, getStorySource } from "~/lib/stories";
import { CodeBlock } from "./code-block";
import { Tabs } from "./ui/tabs";

interface StoryPreviewProps {
	component: string;
	name: string;
}

export const StoryPreview: Component<StoryPreviewProps> = (props) => {
	const source = createAsync(() =>
		getStorySource("tailwind", props.component, props.name),
	);

	const StoryComponent = lazy(getStory(props.component, props.name));

	return (
		<Tabs.Root defaultValue="preview">
			<Tabs.List>
				<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
				<Tabs.Trigger value="code">Code</Tabs.Trigger>
				<Tabs.Indicator />
			</Tabs.List>

			<Tabs.Content value="preview">
				<Box borderWidth="1px" borderColor="border.accent">
					<StoryComponent />
				</Box>
			</Tabs.Content>
			<Tabs.Content value="code">
				<CodeBlock code={source() ?? "Error"} />
			</Tabs.Content>
		</Tabs.Root>
	);
};
