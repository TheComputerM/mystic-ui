"use client";

import { Motion } from "solid-motionone";

import { cn } from "@/lib/utils";
import { type Component, For, mergeProps } from "solid-js";

interface LetterPullupProps {
	text: string;
	class?: string;
	delay?: number;
}

export const LetterPullup: Component<LetterPullupProps> = (props) => {
	const localProps = mergeProps({ delay: 0.05 }, props);
	const letters = localProps.text.split("");

	return (
		<div class={cn("flex", localProps.class)}>
			<For each={letters}>
				{(letter, i) => (
					<Motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: i() * (localProps.delay ? localProps.delay : 0.05),
						}}
					>
						{letter === " " ? <span>&nbsp;</span> : letter}
					</Motion.div>
				)}
			</For>
		</div>
	);
};
