import { RetroGrid } from "@/ui/retro-grid";

export default function DotPatternDemo() {
	return (
		<div class="relative flex h-[500px] w-full items-center justify-center">
			<span class="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
				Retro Grid
			</span>

			<RetroGrid />
		</div>
	);
}
