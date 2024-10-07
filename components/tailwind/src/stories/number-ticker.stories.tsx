import NumberTicker from "@/ui/number-ticker";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof NumberTicker> = {
	title: "Text/Number Ticker",
	component: NumberTicker,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<NumberTicker
			class="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
			{...props}
			value={100}
		/>
	),
};
