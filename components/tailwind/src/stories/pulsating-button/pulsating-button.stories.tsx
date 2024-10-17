import { PulsatingButton } from "@/ui/pulsating-button";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof PulsatingButton> = {
	title: "Buttons/Pulsating Button",
	component: PulsatingButton,
	tags: ["autodocs"],
	argTypes: {
		pulseColor: { control: "color" },
		duration: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <PulsatingButton>Join Affiliate Program</PulsatingButton>,
};
