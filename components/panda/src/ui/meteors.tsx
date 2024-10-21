import {
	type Component,
	For,
	type JSX,
	createEffect,
	createSignal,
	mergeProps,
} from "solid-js";
import { css, cx } from "styled-system/css";

export interface MeteorsProps {
	number?: number;
}
export const Meteors: Component<MeteorsProps> = (props) => {
	const localProps = mergeProps({ number: 30 }, props);
	const [meteorStyles, setMeteorStyles] = createSignal<
		Array<JSX.CSSProperties>
	>([]);

	createEffect(() => {
		const styles = [...new Array(localProps.number)].map(() => ({
			top: "-5px",
			left: `${Math.floor(Math.random() * window.innerWidth)}px`,
			"animation-delay": `${Math.random() * 1 + 0.2}s`,
			"animation-duration": `${Math.floor(Math.random() * 8 + 2)}s`,
		}));
		setMeteorStyles(styles);
	});

	return (
		<For each={meteorStyles()}>
			{(style) => (
				// Meteor Head
				<span
					class={cx(
						css({
							pointerEvents: "none",
							position: "absolute",
							left: "1/2",
							top: "1/2",
							width: "0.5",
							height: "0.5",
							transform: "rotate(215deg) translateX(-500px)",
							opacity: "0",
							animation: "meteor",
							borderRadius: "full",
							backgroundColor: "slate.500",
							boxShadow: "0 0 0 1px #ffffff10",
						}),
					)}
					style={style}
				>
					{/* Meteor Tail */}
					<div
						class={css({
							pointerEvents: "none",
							position: "absolute",
							top: "1/2",
							zIndex: -10,
							height: "1px",
							width: "50px",
							bgGradient: "to-r",
							gradientFrom: "slate.500",
							gradientTo: "transparent",
						})}
					/>
				</span>
			)}
		</For>
	);
};
