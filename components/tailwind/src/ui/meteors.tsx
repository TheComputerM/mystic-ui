import { cn } from "@/lib/utils";
import {
	type Component,
	For,
	type JSX,
	createEffect,
	createSignal,
	mergeProps,
} from "solid-js";

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
					class={cn(
						"pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
					)}
					style={style}
				>
					{/* Meteor Tail */}
					<div class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
				</span>
			)}
		</For>
	);
};
