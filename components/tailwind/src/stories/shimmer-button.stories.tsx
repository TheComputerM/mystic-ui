import { ShimmerButton } from "@/ui/shimmer-button";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof ShimmerButton> = {
	title: "Buttons/Shimmer Button",
	component: ShimmerButton,
	tags: ["autodocs"],
	argTypes: {
		shimmerColor: { control: "color" },
		shimmerSize: { control: "number" },
		shimmerDuration: { control: "number" },
		borderRadius: { control: "number" },
		background: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<ShimmerButton {...props}>
			<span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
				Shimmer Button
			</span>
		</ShimmerButton>
	),
};
