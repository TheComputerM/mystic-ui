import { WordRotate } from "@/ui/word-rotate";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof WordRotate> = {
	title: "Text/Word Rotate",
	component: WordRotate,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<WordRotate
			{...props}
			class="text-4xl font-bold text-black dark:text-white"
			words={["Word", "Rotate"]}
		/>
	),
};
