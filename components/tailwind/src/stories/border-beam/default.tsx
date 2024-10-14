import { BorderBeam, type BorderBeamProps } from "@/ui/border-beam";
import type { Component } from "solid-js";

const Demo: Component<BorderBeamProps> = (props) => (
	<div class="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
		<span class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
			Border Beam
		</span>
		<BorderBeam {...props} />
	</div>
);

export default Demo;
