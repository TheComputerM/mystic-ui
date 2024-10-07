import { LetterPullup } from "@/ui/letter-pullup";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof LetterPullup> = {
	title: "Text/Letter Pullup",
	component: LetterPullup,
	tags: ["autodocs"],
	argTypes: {
		duration: { control: "number" },
		blur: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<LetterPullup
			{...props}
			class="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]"
			text="Staggered Letter Pull Up"
		/>
	),
};
