import { getStory } from "@/lib/storybook";
import { WordPullup } from "@/ui/word-pullup";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof WordPullup> = {
	title: "Text/Word Pullup",
	component: WordPullup,
	argTypes: {
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("word-pullup", "default");
