"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/ui/grid-pattern";

export default function GridPatternDashed() {
	return (
		<div class="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
			<p class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
				Grid Pattern
			</p>
			<GridPattern
				width={30}
				height={30}
				x={-1}
				y={-1}
				strokeDasharray={"4 2"}
				class={cn(
					"[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
				)}
			/>
		</div>
	);
}
