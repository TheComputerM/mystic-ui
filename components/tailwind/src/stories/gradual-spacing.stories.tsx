import { GradualSpacing } from "@/ui/gradual-spacing";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof GradualSpacing> = {
	title: "Text/Gradual Spacing",
	component: GradualSpacing,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<GradualSpacing
			{...props}
			class="font-display text-center text-4xl font-bold text-black dark:text-white md:text-7xl"
			text="Gradual Spacing"
		/>
	),
};
