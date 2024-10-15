import { getStory } from "@/lib/storybook";
import { ShimmerButton } from "@/ui/shimmer-button";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof ShimmerButton> = {
	title: "Buttons/Shimmer Button",
	component: ShimmerButton,
	argTypes: {
		shimmerColor: { control: "color" },
		shimmerSize: { control: "number" },
		shimmerDuration: { control: "number" },
		borderRadius: { control: "number" },
		background: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("shimmer-button", "default");
