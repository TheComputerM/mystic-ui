import { createAsync } from "@solidjs/router";
import { TbReload } from "solid-icons/tb";
import { type Component, Show, Suspense, createSignal, lazy } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Center } from "styled-system/jsx";
import { getStorySource } from "~/lib/stories";
import { RawCodeBlock } from "../code-block";
import { IconButton } from "../ui/icon-button";
import { Spinner } from "../ui/spinner";
import { Tabs } from "../ui/tabs";

const stories = import.meta.glob<{ default: Component }>([
	"../../../../components/panda/src/stories/**/*.tsx",
	"!../../../../components/panda/src/stories/**/stories.tsx",
]);

/**
 * Get the story component that can be imported and used `lazy(getStory(...))`
 */
function getStory(component: string, name = "default") {
	// only panda stories are used cause well, the website uses panda css
	return stories[
		`../../../../components/panda/src/stories/${component}/${name}.tsx`
	];
}

interface StoryPreviewProps {
	framework: "tailwind" | "panda";
	component: string;
	name: string;
}

export const StoryPreview: Component<StoryPreviewProps> = (props) => {
	const highlightedStorySource = createAsync(
		() => getStorySource(props.framework, props.component, props.name),
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
					p="10"
					borderColor="border.accent"
				>
					<Suspense fallback={<Spinner size="lg" my="6" />}>
						<Show when={reload()} keyed>
							<Dynamic component={StoryComponent()} />
						</Show>
					</Suspense>
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
