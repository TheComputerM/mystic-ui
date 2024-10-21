import type { Meta, StoryObj } from "storybook-solidjs";

import { getStory } from "@/lib/storybook";
import { IPhone15 } from "@/ui/iphone-15";

const meta: Meta<typeof IPhone15> = {
	title: "Mocks/IPhone 15",
	component: IPhone15,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("iphone-15", "default");
