import { css, cx } from "styled-system/css";

import { type ParentComponent, mergeProps } from "solid-js";

export interface ShineBorderProps {
	borderRadius?: number;
	borderWidth?: number;
	class?: string;
	color?: string | string[];
	duration?: number;
}

export const ShineBorder: ParentComponent<ShineBorderProps> = (props) => {
	const localProps = mergeProps(
		{ borderRadius: 8, borderWidth: 2, color: "#000000", duration: 14 },
		props,
	);
	return (
		<div
			style={{
				"--border-radius": `${localProps.borderRadius}px`,
			}}
			class={cx(
				css({ position: "relative", borderRadius: "var(--border-radius)" }),
				localProps.class,
			)}
		>
			<div
				style={{
					"--border-width": `${localProps.borderWidth}px`,
					"--border-radius": `${localProps.borderRadius}px`,
					"--duration": `${localProps.duration}s`,
					"--mask-linear-gradient":
						"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					"--background-radial-gradient": `radial-gradient(transparent,transparent, ${
						Array.isArray(localProps.color)
							? localProps.color.join(",")
							: localProps.color
					},transparent,transparent)`,
				}}
				class={css({
					pointerEvents: "none",
					_before: {
						content: "''",
						position: "absolute",
						inset: "0",
						width: "full",
						height: "full",
						borderRadius: "var(--border-radius)",
						padding: "var(--border-width)",
						willChange: "background-position",
						WebkitMaskComposite: "xor!",
						maskComposite: "exclude!",
						backgroundImage: "var(--background-radial-gradient)",
						backgroundSize: "300% 300%",
						mask: "var(--mask-linear-gradient)",
						_motionSafe: {
							// TODO: doesn't recognise the css var for some reason
							animation: "shine var(--duration) infinite linear",
						},
					},
				})}
			/>
			{localProps.children}
		</div>
	);
};
