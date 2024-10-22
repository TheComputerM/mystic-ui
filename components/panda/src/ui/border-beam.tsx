import { type Component, mergeProps } from "solid-js";
import { css, cx } from "styled-system/css";

export interface BorderBeamProps {
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
				"--size": `${localProps.size}px`,
				"--duration": `${localProps.duration}s`,
				"--anchor": `${localProps.anchor}%`,
				"--border-width": `${localProps.borderWidth}px`,
				"--color-from": localProps.colorFrom,
				"--color-to": localProps.colorTo,
				"--delay": `-${localProps.delay}s`,
			}}
			class={cx(
				css({
					pointerEvents: "none",
					position: "absolute",
					inset: "0",
					borderRadius: "inherit",
					borderWidth: "var(--border-width)",
					borderColor: "transparent",

					// mask styles
					maskClip: "padding-box,border-box!",
					maskComposite: "intersect!",
					mask: "linear-gradient(transparent,transparent),linear-gradient(white,white)",

					// pseudo styles
					_after: {
						content: "''",
						position: "absolute",
						aspectRatio: "1",
						width: "var(--size)",
						offsetDistance: 0,
						// TODO: it seems pseudo elements can't inherit css vars from :root
						animation: "border-beam var(--duration) infinite linear",
						animationDelay: "var(--delay)",
						bgGradient: "to-l",
						gradientFrom: "var(--color-from)",
						gradientVia: "var(--color-to)",
						gradientTo: "transparent",
						offsetAnchor: "var(--anchor) 50%",
						offsetPath: "rect(0 auto auto 0 round var(--size))",
					},
				}),
				localProps.class,
			)}
		/>
	);
};
