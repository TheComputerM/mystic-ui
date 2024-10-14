import { RetroGrid } from "@/ui/retro-grid";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof RetroGrid> = {
	title: "Backgrounds/Retro Grid",
	component: RetroGrid,
	tags: ["autodocs"],
	argTypes: {
		angle: { control: "number" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
