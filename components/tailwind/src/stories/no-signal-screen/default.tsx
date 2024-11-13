import { NoSignalScreen } from "@/ui/no-signal-screen";

export default function DotPatternDemo() {
	return (
		<div class="relative flex items-center justify-center h-[500px] w-full">
			<p class="z-10 text-5xl font-bold mix-blend-overlay">No Signal</p>
			<NoSignalScreen />
		</div>
	);
}
