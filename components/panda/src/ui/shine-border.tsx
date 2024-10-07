"use client";
import { css, cx } from "styled-system/css";

import { type ParentComponent, mergeProps } from "solid-js";

type TColorProp = string | string[];

interface ShineBorderProps {
	borderRadius?: number;
	borderWidth?: number;
	duration?: number;
	color?: TColorProp;
	class?: string;
}

export const ShineBorder: ParentComponent<ShineBorderProps> = (props) => {
	const localProps = mergeProps(
		{ borderRadius: 8, borderWidth: 1, duration: 14, color: "#000000" },
		props,
	);
	return (
		<div
			style={{
				"--border-radius": `${localProps.borderRadius}px`,
			}}
			class={cx(
				css({
					position: "relative",
					display: "grid",
					minHeight: "60px",
					width: "fit",
					minWidth: "300px",
					placeItems: "center",
					borderRadius: "var(--border-radius)",
					backgroundColor: "white",
					padding: "3",
					color: "black",
					_dark: { backgroundColor: "black", color: "white" },
				}),
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
					_before: {
						content: "var(--tw-content)",
						position: "absolute",
						inset: "0",
						aspectRatio: "square",
						width: "size.full",
						height: "size.full",
						borderRadius: ".-border-radius",
						padding: ".-border-width",
						willChange: "background-position",
						WebkitMaskComposite: "xor!",
						maskComposite: "exclude!",
						backgroundImage: ".-background-radial-gradient",
						backgroundSize: "300% 300%",
						mask: "var(--mask-linear-gradient)",
						_motionSafe: {
							content: "var(--tw-content)",
							backgroundPosition: "0% 0%",
							animation: "shine",
						},
					},
				})}
			/>
			{localProps.children}
		</div>
	);
};
