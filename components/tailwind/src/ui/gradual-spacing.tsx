import { Motion, type Options } from "solid-motionone";

import { cn } from "@/lib/utils";
import { type Component, For, mergeProps } from "solid-js";

export interface GradualSpacingProps {
	text: string;
	duration?: number;
	delayMultiple?: number;
	states?: {
		hidden: Options["exit"];
		visible: Options["inView"];
	};
	class?: string;
}

export const GradualSpacing: Component<GradualSpacingProps> = (props) => {
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
						inView={localProps.states.visible}
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
