import { cn } from "@/lib/utils";
import { type ParentComponent, Show, mergeProps } from "solid-js";

export interface OrbitingCirclesProps {
	duration?: number;
	delay?: number;
	radius?: number;
	path?: boolean;
	reverse?: boolean;
	class?: string;
}

export const OrbitingCircles: ParentComponent<OrbitingCirclesProps> = (
	props,
) => {
	const localProps = mergeProps(
		{
			duration: 20,
			delay: 0,
			radius: 50,
			path: true,
			reverse: false,
		},
		props,
	);
	return (
		<>
			<Show when={localProps.path}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					class="pointer-events-none absolute inset-0 size-full"
					aria-hidden="true"
				>
					<circle
						class="stroke-black/10 stroke-1 dark:stroke-white/10"
						cx="50%"
						cy="50%"
						r={localProps.radius}
						fill="none"
					/>
				</svg>
			</Show>
			<div
				style={{
					"--duration": `${localProps.duration}s`,
					"--radius": `${localProps.radius}px`,
					"--delay": `-${localProps.delay}s`,
				}}
				class={cn(
					"absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full [animation-delay:var(--delay)]",
					localProps.class,
				)}
				classList={{
					"[animation-direction:reverse]": localProps.reverse,
				}}
			>
				{props.children}
			</div>
		</>
	);
};
