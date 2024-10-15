import type { Meta, StoryObj } from "storybook-solidjs";

import { Starfield } from "@/ui/starfield";

const meta: Meta<typeof Starfield> = {
	title: "Backgrounds/Starfield",
	component: Starfield,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Starfield width={window.innerWidth} height={window.innerHeight} />
	),
};
