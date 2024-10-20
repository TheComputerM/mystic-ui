import { getStory } from "@/lib/storybook";
import { TypingAnimation } from "@/ui/typing-animation";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof TypingAnimation> = {
	title: "Text/Typing Animation",
	component: TypingAnimation,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("typing-animation", "default");
