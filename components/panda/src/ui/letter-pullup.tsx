import { css, cx } from "styled-system/css";

import { type Component, For, mergeProps } from "solid-js";
import { Motion } from "solid-motionone";
import { spring } from "motion";

export interface LetterPullupProps {
	text: string;
	class?: string;
	delay?: number;
}

export const LetterPullup: Component<LetterPullupProps> = (props) => {
	const localProps = mergeProps({ delay: 0.05 }, props);

	return (
		<div class={cx(css({ display: "flex" }), localProps.class)}>
			<For each={localProps.text.split("")}>
				{(letter, i) => (
					<Motion.div
						initial={{ y: 100, opacity: 0 }}
						inView={{ y: 0, opacity: 1 }}
						inViewOptions={{ once: true }}
						transition={{
							delay: i() * localProps.delay,
							easing: spring({ damping: 15, stiffness: 200, velocity: 5 }),
						}}
					>
						{letter === " " ? <span>&nbsp;</span> : letter}
					</Motion.div>
				)}
			</For>
		</div>
	);
};
