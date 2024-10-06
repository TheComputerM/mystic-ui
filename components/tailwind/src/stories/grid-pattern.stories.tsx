import type { Meta, StoryObj } from "storybook-solidjs";

import { cn } from "@/lib/utils";
import { GridPattern } from "../ui/grid-pattern";

const meta: Meta<typeof GridPattern> = {
	title: "Backgrounds/Grid Pattern",
	component: GridPattern,
	tags: ["autodocs"],
	argTypes: {
		width: { control: "number" },
		height: { control: "number" },
		x: { control: "number" },
		y: { control: "number" },
		strokeDasharray: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
