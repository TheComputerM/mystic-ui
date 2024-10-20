import { ShimmerButton } from "@/ui/shimmer-button";

export default function ShimmerButtonDemo() {
	return (
		<div class="z-10 flex h-64 items-center justify-center">
			<ShimmerButton class="shadow-2xl">
				<span class="whitespace-pre-wrap text-center text-sm lg:text-lg font-medium tracking-tight text-white dark:from-white dark:to-slate-900/10">
					Shimmer Button
				</span>
			</ShimmerButton>
		</div>
	);
}
