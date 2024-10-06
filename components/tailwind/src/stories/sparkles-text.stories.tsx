import { SparklesText } from "@/ui/sparkles-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof SparklesText> = {
	title: "Text/Sparkles Text",
	component: SparklesText,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<SparklesText {...props}>
			<span class="text-6xl font-bold">Mystic UI</span>
		</SparklesText>
	),
};
