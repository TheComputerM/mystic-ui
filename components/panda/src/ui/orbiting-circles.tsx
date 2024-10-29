import { css, cx } from "styled-system/css";
import { mergeProps, Show, type ParentComponent } from "solid-js";

export interface OrbitingCirclesProps {
	duration?: number;
	delay?: number;
	radius?: number;
	path?: boolean;
	reverse?: boolean;
	class?: string;
}

export const OrbitingCircles: ParentComponent<OrbitingCirclesProps> = (
	props,
) => {
	const localProps = mergeProps(
		{
			duration: 20,
			delay: 0,
			radius: 50,
			path: true,
			reverse: false,
		},
		props,
	);
	return (
		<>
			<Show when={localProps.path}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					class={css({
						pointerEvents: "none",
						position: "absolute",
						inset: "0",
						width: "full",
						height: "full",
					})}
					aria-hidden="true"
				>
					<circle
						class={css({
							stroke: "black/10",
							strokeWidth: "1",
							_dark: { stroke: "white/10" },
						})}
						cx="50%"
						cy="50%"
						r={localProps.radius}
						fill="none"
					/>
				</svg>
			</Show>
			<div
				style={{
					"--duration": `${localProps.duration}s`,
					"--radius": `${localProps.radius}px`,
					"--delay": `-${localProps.delay}s`,
				}}
				class={cx(
					css({
						position: "absolute",
						display: "flex",
						width: "full",
						height: "full",
						animation: "orbit var(--duration) linear infinite",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "full",
						animationDelay: "var(--delay)",
					}),
					localProps.class,
				)}
				classList={{
					[css({ animationDirection: "reverse" })]: localProps.reverse,
				}}
			>
				{props.children}
			</div>
		</>
	);
};
