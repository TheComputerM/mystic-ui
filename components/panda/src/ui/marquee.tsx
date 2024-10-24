import { css, cx } from "styled-system/css";

import {
	For,
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";

export interface MarqueeProps extends JSX.HTMLAttributes<HTMLDivElement> {
	pauseOnHover?: boolean;
	repeat?: number;
	reverse?: boolean;
	vertical?: boolean;
	duration?: number;
	gap?: string;
}

export const Marquee: ParentComponent<MarqueeProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"children",
		"class",
		"pauseOnHover",
		"repeat",
		"reverse",
		"vertical",
		"duration",
		"gap",
	]);
	const localProps = mergeProps(
		{
			reverse: false,
			pauseOnHover: false,
			vertical: false,
			repeat: 4,
			duration: 40,
			gap: "1rem",
		},
		_localProps,
	);
	return (
		<div
			class={cx(
				"group",
				css({
					display: "flex",
					overflow: "hidden",
					padding: "2",
					gap: "var(--gap)",
				}),
				localProps.vertical
					? css({ flexDirection: "column" })
					: css({ flexDirection: "row" }),
				localProps.class,
			)}
			style={{
				"--duration": `${localProps.duration}s`,
				"--gap": localProps.gap,
			}}
			{...forwardProps}
		>
			<For each={Array(localProps.repeat).fill(0)}>
				{() => (
					<div
						class={css({
							display: "flex",
							flexShrink: "0",
							justifyContent: "space-around",
							gap: "var(--gap)",
						})}
						classList={{
							[css({ animation: "marquee var(--duration) linear infinite" })]:
								!localProps.vertical,
							[css({
								animation: "marquee-vertical var(--duration) linear infinite",
							})]: localProps.vertical,
							[css({ _groupHover: { animationPlayState: "paused" } })]:
								localProps.pauseOnHover,
							[css({ animationDirection: "reverse" })]: localProps.reverse,
						}}
					>
						{localProps.children}
					</div>
				)}
			</For>
		</div>
	);
};
