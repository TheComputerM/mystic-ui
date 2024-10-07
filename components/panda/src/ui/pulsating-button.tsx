import { css } from "../../../styled-system/css";
("use client");

import { cn } from "@/lib/utils";
import {
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";

interface PulsatingButtonProps
	extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	pulseColor?: string;
	duration?: string;
}

export const PulsatingButton: ParentComponent<PulsatingButtonProps> = (
	props,
) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"class",
		"children",
		"pulseColor",
		"duration",
	]);
	const localProps = mergeProps(
		{ pulseColor: "#0096ff", duration: "1.5s" },
		_localProps,
	);
	return (
		<button
			class={cn(
				css({
					position: "relative",
					textAlign: "center",
					cursor: "pointer",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "lg",
					color: "white",
					_dark: { color: "black", backgroundColor: "blue.500" },
					backgroundColor: "blue.500",
					paddingLeft: "4",
					paddingRight: "4",
					paddingTop: "2",
					paddingBottom: "2",
				}),
				localProps.class,
			)}
			style={{
				"--pulse-color": localProps.pulseColor,
				"--duration": localProps.duration,
			}}
			{...forwardProps}
		>
			<div class={css({ position: "relative", zIndex: "10" })}>
				{localProps.children}
			</div>
			<div
				class={css({
					position: "absolute",
					top: "1/2",
					left: "1/2",
					width: "size.full",
					height: "size.full",
					borderRadius: "lg",
					backgroundColor: "inherit",
					opacity: ".5",
					boxShadow: "pulse",
					animation: "pulse",
					transform:
						"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
				})}
			/>
		</button>
	);
};
