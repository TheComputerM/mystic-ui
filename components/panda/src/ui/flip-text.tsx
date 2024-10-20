import { css, cx } from "styled-system/css";

import { Motion, type VariantDefinition } from "solid-motionone";

import { type Component, For, mergeProps } from "solid-js";

export interface FlipTextProps {
	text: string;
	duration?: number;
	delayMultiple?: number;
	states?: {
		initial: VariantDefinition;
		animate: VariantDefinition;
	};
	class?: string;
}

export const FlipText: Component<FlipTextProps> = (props) => {
	const localProps = mergeProps(
		{
			duration: 0.5,
			delayMultiple: 0.08,
			states: {
				initial: { rotateX: -90, opacity: 0 },
				animate: { rotateX: 0, opacity: 1 },
			},
		},
		props,
	);

	return (
		<div class={cx(css({ display: "flex" }), localProps.class)}>
			<For each={localProps.text.split("")}>
				{(char, i) => (
					<Motion.div
						initial={localProps.states.initial}
						inView={localProps.states.animate}
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
