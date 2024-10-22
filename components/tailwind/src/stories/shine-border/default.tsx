import { ShineBorder } from "@/ui/shine-border";

export default function ShineBorderDemo() {
	return (
		<ShineBorder
			class="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg shadow-lg"
			color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
		>
			<span class="text-4xl md:text-6xl font-bold">Shine Border</span>
		</ShineBorder>
	);
}
