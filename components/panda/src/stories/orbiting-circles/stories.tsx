import { getStory } from "@/lib/storybook";
import { OrbitingCircles } from "@/ui/orbiting-circles";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof OrbitingCircles> = {
	title: "Component/Orbiting Circles",
	component: OrbitingCircles,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("orbiting-circles", "default");
