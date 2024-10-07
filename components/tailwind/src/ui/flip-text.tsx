"use client";

import { Motion } from "solid-motionone";

import { cn } from "@/lib/utils";
import { For, mergeProps } from "solid-js";

interface FlipTextProps {
	text: string;
	duration?: number;
	delayMultiple?: number;
	states?: any;
	class?: string;
}

export const FlipText = (props: FlipTextProps) => {
	const localProps = mergeProps(
		{
			duration: 0.5,
			delayMultiple: 0.08,
			states: {
				hidden: { rotateX: -90, opacity: 0 },
				visible: { rotateX: 0, opacity: 1 },
			},
		},
		props,
	);

	return (
		<div class={cn("flex", localProps.class)}>
			<For each={localProps.text.split("")}>
				{(char, i) => (
					<Motion.div
						initial={localProps.states.hidden}
						animate={localProps.states.visible}
						transition={{
							duration: localProps.duration,
							delay: i() * localProps.delayMultiple,
						}}
					>
						{char === " " ? <span>&nbsp;</span> : char}
					</Motion.div>
				)}
			</For>
		</div>
	);
};
