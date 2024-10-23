import { cn } from "@/lib/utils";
import {
	type Component,
	For,
	type JSX,
	mergeProps,
	splitProps,
} from "solid-js";
import { Motion } from "solid-motionone";

export interface WordFadeInProps extends JSX.HTMLAttributes<HTMLDivElement> {
	text: string;
	delay?: number;
	duration?: number;
	blur?: number;
}

export const WordFadeIn: Component<WordFadeInProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"text",
		"delay",
		"duration",
		"blur",
		"class",
	]);
	const localProps = mergeProps(
		{
			delay: 0.15,
			duration: 1,
			blur: 8,
		},
		_localProps,
	);

	return (
		<div class={cn("flex", localProps.class)} {...forwardProps}>
			<For each={localProps.text.split(" ")}>
				{(word, i) => (
					<Motion.div
						initial={{ opacity: 0, filter: `blur(${localProps.blur}px)` }}
						inView={{ opacity: 1, filter: "blur(0px)" }}
						inViewOptions={{ once: true }}
						transition={{
							delay: localProps.delay + i() * localProps.delay,
							duration: localProps.duration,
						}}
					>
						{word}&nbsp;
					</Motion.div>
				)}
			</For>
		</div>
	);
};
