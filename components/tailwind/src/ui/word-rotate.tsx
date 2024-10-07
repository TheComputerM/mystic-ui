"use client";

import {
	type Component,
	type JSX,
	Show,
	createEffect,
	createSignal,
	mergeProps,
	splitProps,
} from "solid-js";
import { Motion, type Options, Presence } from "solid-motionone";

interface WordRotateProps extends JSX.HTMLAttributes<HTMLDivElement> {
	words: string[];
	duration?: number;
	states?: Options;
}

export const WordRotate: Component<WordRotateProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"words",
		"duration",
		"states",
	]);
	const localProps = mergeProps(
		{
			duration: 2500,
			states: {
				initial: { opacity: 0, y: -50 },
				animate: { opacity: 1, y: 0 },
				exit: { opacity: 0, y: 50 },
				transition: { duration: 0.25, easing: "ease-out" },
			} as Options,
		},
		_localProps,
	);

	const [index, setIndex] = createSignal(0);

	createEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % localProps.words.length);
		}, localProps.duration);

		// Clean up interval on unmount
		return () => clearInterval(interval);
	});

	return (
		<Presence>
			<Show when={index() + 1} keyed>
				<Motion.div {...localProps.states} {...forwardProps}>
					{localProps.words[index()]}
				</Motion.div>
			</Show>
		</Presence>
	);
};
