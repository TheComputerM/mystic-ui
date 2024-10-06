"use client";

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
				"relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-blue-500 dark:bg-blue-500 px-4 py-2",
				localProps.class,
			)}
			style={{
				"--pulse-color": localProps.pulseColor,
				"--duration": localProps.duration,
			}}
			{...forwardProps}
		>
			<div class="relative z-10">{localProps.children}</div>
			<div class="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
		</button>
	);
};
