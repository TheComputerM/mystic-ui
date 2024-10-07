"use client";

import { type Component, mergeProps } from "solid-js";
import { Motion, type Options } from "solid-motionone";

type FadeTextProps = {
	class?: string;
	direction?: "up" | "down" | "left" | "right";
	text: string;
	transition?: Options["transition"];
};

const map = { up: 10, down: -10, left: -10, right: 10 };

export const FadeText: Component<FadeTextProps> = (props) => {
	const localProps = mergeProps(
		{ direction: "up" as FadeTextProps["direction"] },
		props,
	);
	const directionOffset = map[localProps.direction!];
	const axis =
		localProps.direction === "up" || localProps.direction === "down"
			? "y"
			: "x";

	return (
		<Motion.div
			initial={{ [axis]: directionOffset, opacity: 0 }}
			inView={{ [axis]: 0, opacity: 1 }}
			transition={{ duration: 1, ...localProps.transition }}
		>
			<Motion.span class={localProps.class}>{localProps.text}</Motion.span>
		</Motion.div>
	);
};
