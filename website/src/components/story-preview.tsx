import { createAsync } from "@solidjs/router";
import { type Component, lazy, Show } from "solid-js";
import { Center } from "styled-system/jsx";
import { getStory, getStorySource } from "~/lib/stories";
import { RawCodeBlock } from "./code-block";
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
				<Center borderWidth="1px" p="2" borderColor="border.accent">
					<StoryComponent />
				</Center>
			</Tabs.Content>
			<Tabs.Content value="code">
				<Show when={source()}>
					<RawCodeBlock html={source()!.html} code={source()!.source} />
				</Show>
			</Tabs.Content>
		</Tabs.Root>
	);
};
