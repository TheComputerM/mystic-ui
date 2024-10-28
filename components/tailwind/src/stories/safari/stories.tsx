import type { Meta, StoryObj } from "storybook-solidjs";

import { getStory } from "@/lib/storybook";
import { Safari } from "@/ui/safari";

const meta: Meta<typeof Safari> = {
	title: "Mocks/Safari",
	component: Safari,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("safari", "default");
