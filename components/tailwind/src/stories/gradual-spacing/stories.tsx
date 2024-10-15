import { getStory } from "@/lib/storybook";
import { GradualSpacing } from "@/ui/gradual-spacing";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof GradualSpacing> = {
	title: "Text/Gradual Spacing",
	component: GradualSpacing,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("gradual-spacing", "default");
