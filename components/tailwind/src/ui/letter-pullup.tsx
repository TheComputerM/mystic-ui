import { cn } from "@/lib/utils";
import { animate, inView, stagger } from "motion";
import { type Component, For, mergeProps, onCleanup, onMount } from "solid-js";

export interface LetterPullupProps {
	text: string;
	class?: string;
	delay?: number;
}

export const LetterPullup: Component<LetterPullupProps> = (props) => {
	const localProps = mergeProps({ delay: 0.05 }, props);
	let container!: HTMLDivElement;

	onMount(() => {
		const stop = inView(container, (info) => {
			animate(
				Array.from(info.target.children),
				{
					y: [100, 0],
					opacity: [0, 1],
				},
				{
					delay: stagger(localProps.delay),
				},
			);
		});

		onCleanup(() => stop());
	});

	return (
		<div class={cn("flex", localProps.class)} ref={container}>
			<For each={localProps.text.split("")}>
				{(letter, i) => (
					<div
					// initial={{ y: 100, opacity: 0 }}
					// inView={{ y: 0, opacity: 1 }}
					// inViewOptions={{ once: true }}
					// transition={{
					// 	delay: i() * localProps.delay,
					// }}
					>
						{letter === " " ? <span>&nbsp;</span> : letter}
					</div>
				)}
			</For>
		</div>
	);
};
