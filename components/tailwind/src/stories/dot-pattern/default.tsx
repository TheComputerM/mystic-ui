import { DotPattern } from "@/ui/dot-pattern";

export default function DotPatternDemo() {
	return (
		<div class="relative flex items-center justify-center h-[500px] w-full">
			<p class="z-10 text-5xl font-bold">Dot Pattern</p>
			<DotPattern class="[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]" />
		</div>
	);
}
