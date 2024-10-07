import { FlipText } from "@/ui/flip-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof FlipText> = {
	title: "Text/Flip Text",
	component: FlipText,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<FlipText
			{...props}
			class="text-4xl font-bold text-black dark:text-white md:text-7xl md:leading-[5rem]"
			text="Flip Text"
		/>
	),
};
