import { cn } from "@/lib/utils";
import { DotPattern } from "@/ui/dot-pattern";

export default function DotPatternLinearGradientDemo() {
	return (
		<div class="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
			<p class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
				Dot Pattern
			</p>
			<DotPattern
				width={20}
				height={20}
				cx={1}
				cy={1}
				cr={1}
				class={cn(
					"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
				)}
			/>
		</div>
	);
}
