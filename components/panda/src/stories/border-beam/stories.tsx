import { getStory } from "@/lib/storybook";
import { BorderBeam } from "@/ui/border-beam";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof BorderBeam> = {
	title: "Effects/Border Beam",
	component: BorderBeam,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("border-beam", "default");
