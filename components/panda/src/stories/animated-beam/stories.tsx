import { getStory } from "@/lib/storybook";
import { AnimatedBeam } from "@/ui/animated-beam";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof AnimatedBeam> = {
	title: "Effects/Animated Beam",
	component: AnimatedBeam,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("animated-beam", "default");
