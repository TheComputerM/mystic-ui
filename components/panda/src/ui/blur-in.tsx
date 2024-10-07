import { css, cx } from "styled-system/css";

import { type Component, mergeProps } from "solid-js";
import { Motion } from "solid-motionone";

interface BlurInProps {
	text: string;
	class?: string;
	blur?: string;
	duration?: number;
}

export const BlurIn: Component<BlurInProps> = (props) => {
	const localProps = mergeProps({ blur: "16px", duration: 1 }, props);
	return (
		<Motion.h1
			initial={{ filter: `blur(${localProps.blur})`, opacity: 0 }}
			animate={{ filter: "blur(0px)", opacity: 1 }}
			transition={{ duration: localProps.duration }}
			class={cx(
				css({
					textAlign: "center",
					fontSize: "4xl",
					lineHeight: "4xl",
					fontWeight: "bold",
					letterSpacing: "-0.02em",
					filter: "sm",
					shadow: "sm",
					md: { fontSize: "7xl", lineHeight: "5rem" },
				}),
				localProps.class,
			)}
		>
			{localProps.text}
		</Motion.h1>
	);
};
