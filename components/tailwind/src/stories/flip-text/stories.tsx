import { getStory } from "@/lib/storybook";
import { FlipText } from "@/ui/flip-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof FlipText> = {
	title: "Text/Flip Text",
	component: FlipText,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("flip-text", "default");
