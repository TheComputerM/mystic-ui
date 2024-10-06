import { FadeText } from "@/ui/fade-text";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof FadeText> = {
	title: "Text/Fade Text",
	component: FadeText,
	tags: ["autodocs"],
	argTypes: {
		pulseColor: { control: "color" },
		duration: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => <FadeText {...props} text="Join Affiliate Program" />,
};
