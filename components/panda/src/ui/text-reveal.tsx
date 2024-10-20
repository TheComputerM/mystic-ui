import { scroll } from "motion";
import {
	type Component,
	For,
	createSignal,
	mergeProps,
	onMount,
} from "solid-js";
import { css, cx } from "styled-system/css";

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
		scroll(
			(info) => {
				setScrollY(info.y.progress);
			},
			{
				target: targetRef,
			},
		);
	});

	return (
		<div
			ref={targetRef}
			class={cx(css({ position: "relative" }), localProps.class)}
			style={{
				height: `calc(100vh + ${words().length * localProps.space}px)`,
			}}
		>
			<div
				class={css({
					position: "sticky",
					top: "0",
					height: "screen",
					display: "flex",
					alignItems: "center",
				})}
			>
				<p class={css({ display: "flex", flexWrap: "wrap", gap: "2" })}>
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
