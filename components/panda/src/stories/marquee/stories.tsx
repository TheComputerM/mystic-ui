import { getStory } from "@/lib/storybook";
import { Marquee } from "@/ui/marquee";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof Marquee> = {
	title: "Component/Marquee",
	component: Marquee,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("marquee", "default");
