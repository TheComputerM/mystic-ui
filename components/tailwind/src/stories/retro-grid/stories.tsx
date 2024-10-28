import { getStory } from "@/lib/storybook";
import { RetroGrid } from "@/ui/retro-grid";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof RetroGrid> = {
	title: "Backgrounds/Retro Grid",
	component: RetroGrid,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("retro-grid", "default");
