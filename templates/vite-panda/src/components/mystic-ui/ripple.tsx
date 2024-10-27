import { type Component, For, mergeProps } from "solid-js";
import { css, cx } from "styled-system/css";

export interface RippleProps {
	mainCircleSize?: number;
	mainCircleOpacity?: number;
	numCircles?: number;
	class?: string;
}

export const Ripple: Component<RippleProps> = (props) => {
	const localProps = mergeProps(
		{ mainCircleSize: 210, mainCircleOpacity: 0.24, numCircles: 8 },
		props,
	);
	return (
		<div
			class={cx(
				css({
					position: "absolute",
					inset: "0",
					backgroundColor: "white/5",
					maskImage: "linear-gradient(to bottom,white,transparent)",
				}),
				localProps.class,
			)}
		>
			<For each={Array.from({ length: localProps.numCircles })}>
				{(_, i) => {
					const size = localProps.mainCircleSize + i() * 70;
					const opacity = localProps.mainCircleOpacity - i() * 0.03;
					const animationDelay = `${i() * 0.06}s`;
					const borderStyle =
						i() === localProps.numCircles - 1 ? "dashed" : "solid";
					const borderOpacity = 5 + i() * 5;

					return (
						<div
							class={css({
								position: "absolute",
								animation: "ripple",
								borderRadius: "full",
								backgroundColor: "black/30",
								_dark: { backgroundColor: "white/30" },
								boxShadow: "xl",
								borderWidth: "1px",
							})}
							style={{
								width: `${size}px`,
								height: `${size}px`,
								opacity,
								"animation-delay": animationDelay,
								"border-style": borderStyle,
								"border-width": "1px",
								"border-color": `hsl(var(--foreground), ${borderOpacity / 100})`,
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%) scale(1)",
							}}
						/>
					);
				}}
			</For>
		</div>
	);
};
