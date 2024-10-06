import { cn } from "@/lib/utils";
import {
	For,
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";

interface MarqueeProps extends JSX.HTMLAttributes<HTMLDivElement> {
	class?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	vertical?: boolean;
	repeat?: number;
}

export const Marquee: ParentComponent<MarqueeProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"class",
		"reverse",
		"children",
		"pauseOnHover",
		"vertical",
		"repeat",
	]);
	const localProps = mergeProps(
		{ reverse: false, pauseOnHover: false, vertical: false, repeat: 4 },
		_localProps,
	);
	return (
		<div
			{...forwardProps}
			class={cn(
				"group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
				localProps.vertical ? "flex-col" : "flex-row",
				localProps.class,
			)}
		>
			<For each={Array(localProps.repeat).fill(0)}>
				{(_, i) => (
					<div
						class={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
							"animate-marquee flex-row": !localProps.vertical,
							"animate-marquee-vertical flex-col": localProps.vertical,
							"group-hover:[animation-play-state:paused]":
								localProps.pauseOnHover,
							"[animation-direction:reverse]": localProps.reverse,
						})}
					>
						{localProps.children}
					</div>
				)}
			</For>
		</div>
	);
};
