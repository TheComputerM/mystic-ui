import { getStory } from "@/lib/storybook";
import { BentoCard } from "@/ui/bento-grid";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof BentoCard> = {
	title: "Component/Bento Grid",
	component: BentoCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("bento-grid", "default");
