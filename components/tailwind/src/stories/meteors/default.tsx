import { Meteors } from "@/ui/meteors";

export default function MeteorDemo() {
	return (
		<div class="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border shadow-lg">
			<Meteors number={30} />
			<span class="text-4xl md:text-6xl font-bold">Meteors</span>
		</div>
	);
}
