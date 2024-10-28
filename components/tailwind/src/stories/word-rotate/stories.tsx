import { getStory } from "@/lib/storybook";
import { WordRotate } from "@/ui/word-rotate";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof WordRotate> = {
	title: "Text/Word Rotate",
	component: WordRotate,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("word-rotate", "default");
