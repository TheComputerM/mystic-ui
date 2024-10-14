import { getStory } from "@/lib/storybook";
import { BorderBeam } from "@/ui/border-beam";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof BorderBeam> = {
	title: "Effects/Border Beam",
	component: BorderBeam,
	argTypes: {
		anchor: { control: "number" },
		borderWidth: { control: "number" },
		colorFrom: { control: "color" },
		colorTo: { control: "color" },
		delay: { control: "number" },
		duration: { control: "number" },
		size: { control: "number" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("border-beam", "default");
