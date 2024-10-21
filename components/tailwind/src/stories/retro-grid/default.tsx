import { RetroGrid } from "@/ui/retro-grid";

export default function DotPatternDemo() {
	return (
		<div class="relative flex h-[500px] w-full items-center justify-center">
			<span class="z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold text-transparent">
				Retro Grid
			</span>

			<RetroGrid />
		</div>
	);
}
