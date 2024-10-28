import { BackgroundLines } from "@/ui/background-lines";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof BackgroundLines> = {
	title: "Backgrounds/Background Lines",
	component: BackgroundLines,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<BackgroundLines class="flex items-center justify-center w-full flex-col px-4">
			<h2 class="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
				Sanjana Airlines, <br /> Sajana Textiles.
			</h2>
			<p class="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
				Get the best advices from our experts, including expert artists,
				painters, marathon enthusiasts and RDX, totally free.
			</p>
		</BackgroundLines>
	),
};
