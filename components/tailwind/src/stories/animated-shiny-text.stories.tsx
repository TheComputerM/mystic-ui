import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/ui/animated-shiny-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof AnimatedShinyText> = {
	title: "Text/Animated Shiny Text",
	component: AnimatedShinyText,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<div class="z-10 flex min-h-64 items-center justify-center">
			<div
				class={cn(
					"group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
				)}
			>
				<AnimatedShinyText class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
					<span>✨ Introducing Magic UI</span>
				</AnimatedShinyText>
			</div>
		</div>
	),
};
