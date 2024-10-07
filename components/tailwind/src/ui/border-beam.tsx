import { cn } from "@/lib/utils";
import { type Component, mergeProps } from "solid-js";

interface BorderBeamProps {
	anchor?: number;
	borderWidth?: number;
	class?: string;
	colorFrom?: string;
	colorTo?: string;
	delay?: number;
	duration?: number;
	size?: number;
}

export const BorderBeam: Component<BorderBeamProps> = (props) => {
	const localProps = mergeProps(
		{
			anchor: 90,
			borderWidth: 1.5,
			colorFrom: "#ffaa40",
			colorTo: "#9c40ff",
			delay: 0,
			duration: 15,
			size: 200,
		},
		props,
	);

	return (
		<div
			style={{
				"--size": localProps.size,
				"--duration": localProps.duration,
				"--anchor": localProps.anchor,
				"--border-width": localProps.borderWidth,
				"--color-from": localProps.colorFrom,
				"--color-to": localProps.colorTo,
				"--delay": `-${localProps.delay}s`,
			}}
			class={cn(
				"pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

				// mask styles
				"![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

				// pseudo styles
				"after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
				localProps.class,
			)}
		/>
	);
};
