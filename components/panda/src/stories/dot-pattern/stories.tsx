import type { Meta, StoryObj } from "storybook-solidjs";

import { getStory } from "@/lib/storybook";
import { DotPattern } from "@/ui/dot-pattern";

const meta: Meta<typeof DotPattern> = {
	title: "Backgrounds/Dot Pattern",
	component: DotPattern,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("dot-pattern", "default");
