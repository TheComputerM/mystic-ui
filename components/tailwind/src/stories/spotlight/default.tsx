import { Spotlight } from "@/ui/spotlight";

export default function SpotlightDemo() {
	return (
		<div class="h-[500px] w-full rounded-md flex items-center justify-center relative overflow-hidden dark bg-black">
			<Spotlight class="left-0 -top-20" fill="white" />
			<h1 class="bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-4xl md:text-8xl font-bold text-transparent dark:from-white dark:to-slate-900/10">
				Spotlight
			</h1>
		</div>
	);
}
