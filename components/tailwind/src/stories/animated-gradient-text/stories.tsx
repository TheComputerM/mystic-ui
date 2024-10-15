import { getStory } from "@/lib/storybook";
import { AnimatedGradientText } from "@/ui/animated-gradient-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof AnimatedGradientText> = {
	title: "Text/Animated Gradient Text",
	component: AnimatedGradientText,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("animated-gradient-text", "default");
