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
import { Motion, type MotionComponentProps, Presence } from "solid-motionone";
import { css } from "styled-system/css";

export interface WordRotateProps
	extends JSX.HTMLAttributes<HTMLDivElement>,
		Omit<MotionComponentProps, "children"> {
	words: string[];
	duration?: number;
}

export const WordRotate: Component<WordRotateProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, ["words", "duration"]);
	const localProps = mergeProps(
		{
			duration: 2500,
		},
		_localProps,
	);

	const [index, setIndex] = createSignal(0);

	createEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % localProps.words.length);
		}, localProps.duration);

		return () => clearInterval(interval);
	});

	return (
		<Presence exitBeforeEnter>
			<Show when={index() + 1} keyed>
				<Motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.25, easing: "ease-out" }}
					{...forwardProps}
				>
					{localProps.words[index()]}
				</Motion.div>
			</Show>
		</Presence>
	);
};