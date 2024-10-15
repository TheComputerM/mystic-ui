import { getStory } from "@/lib/storybook";
import { WordFadeIn } from "@/ui/word-fade-in";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof WordFadeIn> = {
	title: "Text/Word Fade In",
	component: WordFadeIn,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("word-fade-in", "default");
