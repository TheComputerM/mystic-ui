import { SparklesCore } from "@/ui/sparkles";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta: Meta<typeof SparklesCore> = {
	title: "Effects/Sparkles",
	component: SparklesCore,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props: any) => (
		<div class="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div class="w-full h-screen absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 class="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
    </div>
	),
};
