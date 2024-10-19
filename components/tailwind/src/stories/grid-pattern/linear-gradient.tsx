import { cn } from "@/lib/utils";
import { GridPattern } from "@/ui/grid-pattern";

export default function GridPatternLinearGradient() {
	return (
		<div class="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
			<p class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
				Grid Pattern
			</p>
			<GridPattern
				width={20}
				height={20}
				x={-1}
				y={-1}
				class={cn(
					"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
				)}
			/>
		</div>
	);
}
