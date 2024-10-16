import { Starfield } from "@/ui/starfield";

export default function StarfieldDemo() {
	return (
		<div class="relative grid place-items-center h-[400px]">
			<h1 class="text-white">Starfield</h1>
			<Starfield class="absolute w-full h-full inset-0 -z-50" />
		</div>
	);
}
