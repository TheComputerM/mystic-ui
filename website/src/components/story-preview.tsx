import { createAsync } from "@solidjs/router";
import { TbReload } from "solid-icons/tb";
import { type Component, Show, Suspense, createSignal, lazy } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Center } from "styled-system/jsx";
import { getStory, getStorySource } from "~/lib/stories";
import { RawCodeBlock } from "./code-block";
import { IconButton } from "./ui/icon-button";
import { Tabs } from "./ui/tabs";

interface StoryPreviewProps {
	component: string;
	name: string;
}

export const StoryPreview: Component<StoryPreviewProps> = (props) => {
	const highlightedStorySource = createAsync(
		() => getStorySource("tailwind", props.component, props.name),
		{
			name: "story-source",
			initialValue: {
				source: "",
				html: "",
			},
		},
	);
	const StoryComponent = () => lazy(getStory(props.component, props.name));
	const [reload, setReload] = createSignal(1);

	return (
		<Tabs.Root defaultValue="preview">
			<Tabs.List>
				<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
				<Tabs.Trigger value="code">Code</Tabs.Trigger>
				<Tabs.Indicator />
			</Tabs.List>

			<Tabs.Content value="preview">
				<Center
					position="relative"
					borderWidth="1px"
					p="2"
					borderColor="border.accent"
				>
					<Show when={reload()} keyed>
						<Suspense>
							<Dynamic component={StoryComponent()} />
						</Suspense>
					</Show>
					<IconButton
						variant="outline"
						position="absolute"
						size="xs"
						top="1"
						right="1"
						onClick={() => setReload((r) => r + 1)}
					>
						<TbReload />
					</IconButton>
				</Center>
			</Tabs.Content>
			<Tabs.Content value="code">
				<RawCodeBlock
					html={highlightedStorySource().html}
					code={highlightedStorySource().source}
				/>
			</Tabs.Content>
		</Tabs.Root>
	);
};
