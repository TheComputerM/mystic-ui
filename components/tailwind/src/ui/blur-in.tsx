"use client";

import { Motion } from "solid-motionone";

import { cn } from "@/lib/utils";
import { type Component, mergeProps, splitProps } from "solid-js";

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
			class={cn(
				"font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
				localProps.class,
			)}
		>
			{localProps.text}
		</Motion.h1>
	);
};
