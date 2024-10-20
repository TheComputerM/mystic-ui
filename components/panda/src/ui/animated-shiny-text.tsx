import { css, cx } from "styled-system/css";
import {
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";

export interface AnimatedShinyTextProps
	extends JSX.HTMLAttributes<HTMLParagraphElement> {
	shimmerWidth?: number;
}

export const AnimatedShinyText: ParentComponent<AnimatedShinyTextProps> = (
	props,
) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"shimmerWidth",
		"class",
		"children",
	]);
	const localProps = mergeProps({ shimmerWidth: 100 }, _localProps);

	return (
		<p
			style={{
				"--shiny-width": `${localProps.shimmerWidth}px`,
			}}
			class={cx(
				css({
					marginX: "auto",
					maxWidth: "md",
					color: "neutral.600/70",

					// Shine effect
					backgroundPosition: "0 0",
					animation: "shiny-text",
					backgroundClip: "text",
					backgroundRepeat: "no-repeat",
					backgroundSize: "var(--shiny-width) 100%",
					transition: "background-position 1s cubic-bezier(.6,.6,0,1) infinite",

					// Shine gradient
					bgGradient: "to-r",
					gradientFrom: "transparent",
					gradientVia: "black/50",
					gradientTo: "transparent",
					_dark: { color: "neutral.400/70", gradientVia: "white/80" },
				}),
				localProps.class,
			)}
			{...forwardProps}
		>
			{localProps.children}
		</p>
	);
};
