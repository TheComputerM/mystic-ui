import { cn } from "@/lib/utils";
import { GridPattern } from "@/ui/grid-pattern";

export default function GridPatternDashed() {
	return (
		<div class="relative flex  w-full items-center justify-center overflow-hidden p-20">
			<p class="z-10 text-5xl font-bold tracking-tighter">Grid Pattern</p>
			<GridPattern
				width={30}
				height={30}
				x={-1}
				y={-1}
				class={cn(
					"[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
				)}
			/>
		</div>
	);
}
