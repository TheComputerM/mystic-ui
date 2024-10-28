import type { Meta, StoryObj } from "storybook-solidjs";

import { getStory } from "@/lib/storybook";
import { Starfield } from "@/ui/starfield";

const meta: Meta<typeof Starfield> = {
	title: "Effects/Starfield",
	component: Starfield,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("starfield", "default");
