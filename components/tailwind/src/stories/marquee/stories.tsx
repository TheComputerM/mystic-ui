import { getStory } from "@/lib/storybook";
import { Marquee } from "@/ui/marquee";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof Marquee> = {
	title: "Marquee",
	component: Marquee,
	argTypes: {
		reverse: { control: "boolean" },
		pauseOnHover: { control: "boolean" },
		vertical: { control: "boolean" },
		repeat: { control: "number" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("marquee", "default");
