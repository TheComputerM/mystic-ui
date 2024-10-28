import { getStory } from "@/lib/storybook";
import { ShineBorder } from "@/ui/shine-border";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof ShineBorder> = {
	title: "Effects/Shine Border",
	component: ShineBorder,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("shine-border", "default");
