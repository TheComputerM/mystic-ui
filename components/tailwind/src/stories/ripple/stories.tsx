import { getStory } from "@/lib/storybook";
import { Ripple } from "@/ui/ripple";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof Ripple> = {
	title: "Backgrounds/Ripple",
	component: Ripple,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("ripple", "default");
