import { BlurIn } from "@/ui/blur-in";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof BlurIn> = {
	title: "Text/Blur In",
	component: BlurIn,
	tags: ["autodocs"],
	argTypes: {
		duration: { control: "number" },
		blur: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => <BlurIn {...props} text="Blur In" />,
};
