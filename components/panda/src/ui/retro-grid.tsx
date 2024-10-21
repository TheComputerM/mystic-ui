import { css, cx } from "styled-system/css";

import { type Component, mergeProps } from "solid-js";

export interface RetroGridProps {
	angle?: number;
	class?: string;
}

export const RetroGrid: Component<RetroGridProps> = (props) => {
	const localProps = mergeProps({ angle: 65 }, props);
	return (
		<div
			class={cx(
				css({
					pointerEvents: "none",
					position: "absolute",
					width: "full",
					height: "full",
					overflow: "hidden",
					opacity: "0.5",
					perspective: "200px",
				}),
				localProps.class,
			)}
			style={{ "--grid-angle": `${localProps.angle}deg` }}
		>
			{/* Grid */}
			<div
				class={css({
					position: "absolute",
					inset: "0",
					transform: "rotateX(var(--grid-angle))",
				})}
			>
				<div
					class={css({
						transform: "translateY(0)",
						animation: "grid",
						backgroundRepeat: "repeat",
						backgroundSize: "60px 60px",
						height: "300vh",
						marginLeft: "-50%",
						transformOrigin: "100% 0 0",
						width: "600vw",

						backgroundImage:
							"linear-gradient(to right,rgba(0,0,0,0.3) 1px,transparent 0),linear-gradient(to bottom,rgba(0,0,0,0.3) 1px,transparent 0)",
						_dark: {
							backgroundImage:
								"linear-gradient(to right,rgba(255,255,255,0.2) 1px,transparent 0),linear-gradient(to bottom,rgba(255,255,255,0.2) 1px,transparent 0)",
						},
					})}
				/>
			</div>

			{/* Background Gradient */}
			<div
				class={css({
					position: "absolute",
					inset: "0",
					bgGradient: "to-t",
					gradientFrom: "white",
					_dark: {
						gradientFrom: "black",
					},
					gradientToPosition: "90%",
					gradientTo: "transparent",
				})}
			/>
		</div>
	);
};
