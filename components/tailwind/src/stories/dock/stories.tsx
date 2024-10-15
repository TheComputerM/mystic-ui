import type { Meta, StoryObj } from "storybook-solidjs";

import { getStory } from "@/lib/storybook";
import { DockIcon } from "@/ui/dock";

const meta: Meta<typeof DockIcon> = {
	title: "Dock",
	component: DockIcon,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("dock", "default");
