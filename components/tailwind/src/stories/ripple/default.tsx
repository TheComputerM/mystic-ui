import { Ripple } from "@/ui/ripple";

export default function RippleDemo() {
	return (
		<div class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
			<p class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
				Ripple
			</p>
			<Ripple />
		</div>
	);
}
