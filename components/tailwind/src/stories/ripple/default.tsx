import { Ripple } from "@/ui/ripple";

export default function RippleDemo() {
	return (
		<div class="relative h-[800px] w-full flex items-center justify-center overflow-hidden">
			<img
				src="https://raw.githubusercontent.com/solidjs/solid-site/refs/heads/main/src/assets/logo.svg"
				class="w-20 grayscale"
				alt="Solid JS"
			/>
			<Ripple />
		</div>
	);
}
