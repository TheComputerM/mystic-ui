import { getStory } from "@/lib/storybook";
import { LetterPullup } from "@/ui/letter-pullup";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof LetterPullup> = {
	title: "Text/Letter Pullup",
	component: LetterPullup,
	argTypes: {
		duration: { control: "number" },
		blur: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("letter-pullup", "default");
