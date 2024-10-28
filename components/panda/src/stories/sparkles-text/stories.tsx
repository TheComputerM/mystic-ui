import { getStory } from "@/lib/storybook";
import { SparklesText } from "@/ui/sparkles-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof SparklesText> = {
	title: "Text/Sparkles Text",
	component: SparklesText,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("sparkles-text", "default");
