import { BorderBeam } from "@/ui/border-beam";

export default function BorderBeamDemo() {
	return (
		<div class="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border shadow-lg">
			<span class="text-4xl md:text-6xl font-bold">Border Beam</span>
			<BorderBeam />
		</div>
	);
}
