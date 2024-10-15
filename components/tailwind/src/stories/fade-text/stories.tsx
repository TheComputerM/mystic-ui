import { getStory } from "@/lib/storybook";
import { FadeText } from "@/ui/fade-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof FadeText> = {
	title: "Text/Fade Text",
	component: FadeText,
	argTypes: {
		direction: { control: "string" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("fade-text", "default");
