import { cn } from "@/lib/utils";
import { type Component, mergeProps } from "solid-js";

export interface RetroGridProps {
	angle?: number;
	class?: string;
}

export const RetroGrid: Component<RetroGridProps> = (props) => {
	const localProps = mergeProps({ angle: 65 }, props);
	return (
		<div
			class={cn(
				"pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",
				localProps.class,
			)}
			style={{ "--grid-angle": `${localProps.angle}deg` }}
		>
			{/* Grid */}
			<div class="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
				<div
					class={cn(
						"animate-grid",

						"bg-repeat [background-size:60px_60px] h-[300vh] [margin-left:-50%] [margin-left:-50%] [transform-origin:100%_0_0] w-[600vw]",

						// Light Styles
						"[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",

						// Dark styles
						"dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]",
					)}
				/>
			</div>

			{/* Background Gradient */}
			<div class="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
		</div>
	);
};
