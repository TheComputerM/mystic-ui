import { css, cx } from "styled-system/css";

import {
	For,
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";

interface MarqueeProps extends JSX.HTMLAttributes<HTMLDivElement> {
	class?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	vertical?: boolean;
	repeat?: number;
}

export const Marquee: ParentComponent<MarqueeProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"class",
		"reverse",
		"children",
		"pauseOnHover",
		"vertical",
		"repeat",
	]);
	const localProps = mergeProps(
		{ reverse: false, pauseOnHover: false, vertical: false, repeat: 4 },
		_localProps,
	);
	return (
		<div
			{...forwardProps}
			class={cx(
				css({
					display: "flex",
					overflow: "hidden",
					padding: "2",
					gap: "var(.-gap)",
				}),
				localProps.vertical
					? css({ flexDirection: "column" })
					: css({ flexDirection: "row" }),
				localProps.class,
			)}
		>
			<For each={Array(localProps.repeat).fill(0)}>
				{() => (
					<div
						class={cx(
							css({
								display: "flex",
								flexShrink: "0",
								justifyContent: "space-around",
								gap: "var(.-gap)",
							}),
							css({
								transform: "translateX(calc(-100% - var(--gap)))",
								animation: "marquee",
								flexDirection: "row",
							}) && !localProps.vertical,
							css({
								transform: "translateY(calc(-100% - var(--gap)))",
								animation: "marquee.vertical",
								flexDirection: "column",
							}) && localProps.vertical,
							css({ _groupHover: { animationPlayState: "paused" } }) &&
								localProps.pauseOnHover,
							css({ animationDirection: "reverse" }) && localProps.reverse,
						)}
					>
						{localProps.children}
					</div>
				)}
			</For>
		</div>
	);
};
