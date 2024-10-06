import { ShineBorder } from "@/ui/shine-border";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof ShineBorder> = {
	title: "Effects/Shine Border",
	component: ShineBorder,
	tags: ["autodocs"],
	argTypes: {
		duration: { control: "number" },
		color: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<ShineBorder
			class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
			color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
			{...props}
		>
			<span class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
				Shine Border
			</span>
		</ShineBorder>
	),
};
