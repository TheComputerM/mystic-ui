import { GridPattern } from "@/ui/grid-pattern";

export default function GridPatternDashed() {
	return (
		<div class="relative flex items-center justify-center h-[500px] w-full">
			<p class="z-10 text-5xl font-bold">Grid Pattern</p>
			<GridPattern
				width={30}
				height={30}
				x={-1}
				y={-1}
				class="[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
			/>
		</div>
	);
}
