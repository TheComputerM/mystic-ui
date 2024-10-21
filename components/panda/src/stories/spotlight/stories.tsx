import { getStory } from "@/lib/storybook";
import { Spotlight } from "@/ui/spotlight";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof Spotlight> = {
	title: "Effects/Spotlight",
	component: Spotlight,
	argTypes: {
		duration: { control: "number" },
		color: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("spotlight", "default");
