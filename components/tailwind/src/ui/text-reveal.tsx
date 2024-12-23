import { cn } from "@/lib/utils";
import { scroll } from "motion";
import {
	type Component,
	For,
	createSignal,
	mergeProps,
	onCleanup,
	onMount,
} from "solid-js";

interface TextRevealByWordProps {
	text: string;
	space?: number;
	class?: string;
}

export const TextReveal: Component<TextRevealByWordProps> = (props) => {
	const localProps = mergeProps({ space: 200 }, props);
	const words = () => localProps.text.split(" ");
	const [scrollY, setScrollY] = createSignal(0);

	let targetRef!: HTMLDivElement;
	onMount(() => {
		const cancel = scroll((progress: number) => setScrollY(progress), {
			target: targetRef,
		});

		onCleanup(() => cancel());
	});

	return (
		<div
			ref={targetRef}
			class={cn("relative", localProps.class)}
			style={{
				height: `calc(100vh + ${words().length * localProps.space}px)`,
			}}
		>
			<div class="sticky top-0 h-screen flex items-center">
				<p class="flex flex-wrap gap-2">
					<For each={words()}>
						{(word, i) => {
							const opacity = () =>
								Math.min(1, Math.max(0.15, scrollY() * words().length - i()));
							return <span style={{ opacity: opacity() }}>{word}&nbsp;</span>;
						}}
					</For>
				</p>
			</div>
		</div>
	);
};
