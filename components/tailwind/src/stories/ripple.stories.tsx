import { Ripple } from "@/ui/ripple";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof Ripple> = {
	title: "Backgrounds/Ripple",
	component: Ripple,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
			<p class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
				Ripple
			</p>
			<Ripple />
		</div>
	),
};
