import { getStory } from "@/lib/storybook";
import { Meteors } from "@/ui/meteors";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof Meteors> = {
	title: "Effects/Meteors",
	component: Meteors,
	argTypes: {
		number: { control: "number" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("meteors", "default");
