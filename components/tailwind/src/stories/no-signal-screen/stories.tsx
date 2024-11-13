import type { Meta, StoryObj } from "storybook-solidjs";

import { getStory } from "@/lib/storybook";
import { NoSignalScreen } from "@/ui/no-signal-screen";

const meta: Meta<typeof NoSignalScreen> = {
	title: "Backgrounds/No Signal Screen",
	component: NoSignalScreen,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = getStory("no-signal-screen", "default");
