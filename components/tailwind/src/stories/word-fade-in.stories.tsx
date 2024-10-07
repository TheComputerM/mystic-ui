import { WordFadeIn } from "@/ui/word-fade-in";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof WordFadeIn> = {
	title: "Text/Word Fade In",
	component: WordFadeIn,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<WordFadeIn
			{...props}
			class="text-4xl font-bold text-black dark:text-white"
			text="Word Fade In"
		/>
	),
};
