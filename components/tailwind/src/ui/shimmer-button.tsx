import { cn } from "@/lib/utils";
import {
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";

export interface ShimmerButtonProps
	extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	shimmerColor?: string;
	shimmerSize?: string;
	borderRadius?: string;
	shimmerDuration?: string;
	background?: string;
	class?: string;
}

export const ShimmerButton: ParentComponent<ShimmerButtonProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"shimmerColor",
		"shimmerSize",
		"shimmerDuration",
		"borderRadius",
		"background",
		"class",
		"children",
	]);
	const localProps = mergeProps(
		{
			shimmerColor: "#ffffff",
			shimmerSize: "0.05em",
			shimmerDuration: "3s",
			borderRadius: "100px",
			background: "rgba(0, 0, 0, 1)",
		},
		_localProps,
	);
	return (
		<button
			style={{
				"--spread": "90deg",
				"--shimmer-color": localProps.shimmerColor,
				"--radius": localProps.borderRadius,
				"--speed": localProps.shimmerDuration,
				"--cut": localProps.shimmerSize,
				"--bg": localProps.background,
			}}
			class={cn(
				"group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
				"transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
				localProps.class,
			)}
			{...forwardProps}
			ref={forwardProps.ref}
		>
			{/* spark container */}
			<div
				class={cn(
					"-z-30 blur-[2px]",
					"absolute inset-0 overflow-visible [container-type:size]",
				)}
			>
				{/* spark */}
				<div class="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
					{/* spark before */}
					<div class="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
				</div>
			</div>
			{localProps.children}

			{/* Highlight */}
			<div
				class={cn(
					"insert-0 absolute size-full",

					"rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",

					// transition
					"transform-gpu transition-all duration-300 ease-in-out",

					// on hover
					"group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",

					// on click
					"group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
				)}
			/>

			{/* backdrop */}
			<div
				class={cn(
					"absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
				)}
			/>
		</button>
	);
};
