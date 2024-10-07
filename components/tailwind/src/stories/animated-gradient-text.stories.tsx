import { AnimatedGradientText } from "@/ui/animated-gradient-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof AnimatedGradientText> = {
	title: "Text/Animated Gradient Text",
	component: AnimatedGradientText,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<div class="z-10 flex min-h-64 items-center justify-center">
			<AnimatedGradientText>
				🎉 <hr class="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
				<span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
					Introducing Magic UI
				</span>
			</AnimatedGradientText>
		</div>
	),
};
