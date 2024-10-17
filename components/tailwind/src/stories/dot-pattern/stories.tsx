import type { Meta, StoryObj } from "storybook-solidjs";

import { getStory } from "@/lib/storybook";
import { DotPattern } from "@/ui/dot-pattern";

const meta: Meta<typeof DotPattern> = {
	title: "Backgrounds/Dot Pattern",
	component: DotPattern,
	argTypes: {
		width: { control: "number" },
		height: { control: "number" },
		x: { control: "number" },
		y: { control: "number" },
		cx: { control: "number" },
		cy: { control: "number" },
		cr: { control: "number" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("dot-pattern", "default");
export const LinearGradient: Story = getStory("dot-pattern", "linear-gradient");
