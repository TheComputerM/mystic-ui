import { getStory } from "@/lib/storybook";
import { GridPattern } from "@/ui/grid-pattern";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof GridPattern> = {
	title: "Backgrounds/Grid Pattern",
	component: GridPattern,
	argTypes: {
		width: { control: "number" },
		height: { control: "number" },
		x: { control: "number" },
		y: { control: "number" },
		squares: { control: "object" },
		strokeDasharray: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("grid-pattern", "default");

export const LinearGradient: Story = getStory(
	"grid-pattern",
	"linear-gradient",
);
