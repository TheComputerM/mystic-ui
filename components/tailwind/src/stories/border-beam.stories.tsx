import type { BlurIn } from "@/ui/blur-in";
import { BorderBeam } from "@/ui/border-beam";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof BlurIn> = {
	title: "Effects/Border Beam",
	component: BorderBeam,
	tags: ["autodocs"],
	argTypes: {
		size: { control: "numer" },
		duration: { control: "number" },
		delay: { control: "number" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<div class="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
			<span class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
				Border Beam
			</span>
			<BorderBeam {...props} />
		</div>
	),
};
