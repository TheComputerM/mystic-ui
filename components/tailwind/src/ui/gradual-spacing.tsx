"use client";

import { Motion } from "solid-motionone";

import { cn } from "@/lib/utils";
import { For, mergeProps } from "solid-js";

interface GradualSpacingProps {
	text: string;
	duration?: number;
	delayMultiple?: number;
	states?: any;
	class?: string;
}

export const GradualSpacing = (props: GradualSpacingProps) => {
	const localProps = mergeProps(
		{
			duration: 0.5,
			delayMultiple: 0.04,
			states: {
				hidden: { opacity: 0, x: -20 },
				visible: { opacity: 1, x: 0 },
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
						exit={localProps.states.hidden}
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
