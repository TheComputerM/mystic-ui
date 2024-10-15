import { getStory } from "@/lib/storybook";
import { SparklesCore } from "@/ui/sparkles";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof SparklesCore> = {
	title: "Effects/Sparkles",
	component: SparklesCore,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("sparkles", "default");
