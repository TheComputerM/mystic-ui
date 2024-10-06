import type { Meta, StoryObj } from "storybook-solidjs";

import { DotPattern } from "../ui/dot-pattern";

const meta: Meta<typeof DotPattern> = {
  title: "Dot Pattern",
  component: DotPattern,
  tags: ["autodocs"],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    x: { control: "number" },
    y: { control: "number" },
    cx: { control: "number" },
    cy: { control: "number" },
    cr: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
