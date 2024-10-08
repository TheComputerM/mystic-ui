import { TypingAnimation } from "@/ui/typing-animation";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof TypingAnimation> = {
	title: "Text/Typing Animation",
	component: TypingAnimation,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<h1 class="text-4xl font-bold text-black dark:text-white">
			<TypingAnimation {...props} text="Typing Animation" />
		</h1>
	),
};
