import { css, cx } from "styled-system/css";

import { type Component, mergeProps } from "solid-js";

interface BorderBeamProps {
	class?: string;
	size?: number;
	duration?: number;
	borderWidth?: number;
	anchor?: number;
	colorFrom?: string;
	colorTo?: string;
	delay?: number;
}

export const BorderBeam: Component<BorderBeamProps> = (props) => {
	const localProps = mergeProps(
		{
			size: 200,
			duration: 15,
			anchor: 90,
			borderWidth: 1.5,
			colorFrom: "#ffaa40",
			colorTo: "#9c40ff",
			delay: 0,
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
			class={cx(
				css({
					pointerEvents: "none",
					position: "absolute",
					inset: "0",
					borderRadius: "inherit",
					border: "calc(var(--border-width)*1px)_solid_transparent",
				}),

				// mask styles
				css({
					maskClip: "padding-box,border-box!",
					maskComposite: "intersect!",
					mask: "linear-gradient(transparent,transparent),linear-gradient(white,white)",
				}),

				// pseudo styles
				css({
					_after: {
						content: "var(--tw-content)",
						position: "absolute",
						aspectRatio: "square",
						width: "calc(var(--size)*1px)",
						offsetDistance: "100%",
						animation: "border.beam",
						animationDelay: "var(--delay)",
						background:
							"linear.gradient(to_left,var(--color-from),var(--color-to),transparent)",
						offsetAnchor: "calc(var(--anchor) * 1%) 50%",
						offsetPath: "rect(0 auto auto 0 round calc(var(--size) * 1px))",
					},
				}),
				localProps.class,
			)}
		/>
	);
};
