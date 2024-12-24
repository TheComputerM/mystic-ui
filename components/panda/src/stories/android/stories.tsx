import type { Meta, StoryObj } from "storybook-solidjs";

import { getStory } from "@/lib/storybook";
import { Android } from "@/ui/android";

const meta: Meta<typeof Android> = {
	title: "Mocks/Android",
	component: Android,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("android", "default");
