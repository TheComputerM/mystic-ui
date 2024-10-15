import { ShimmerButton } from "@/ui/shimmer-button";

export default function ShimmerButtonDemo() {
	return (
		<div class="z-10 flex min-h-64 items-center justify-center">
			<ShimmerButton class="shadow-2xl">
				<span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
					Shimmer Button
				</span>
			</ShimmerButton>
		</div>
	);
}
