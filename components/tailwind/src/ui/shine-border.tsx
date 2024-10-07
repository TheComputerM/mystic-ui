"use client";

import { cn } from "@/lib/utils";
import { type ParentComponent, mergeProps } from "solid-js";

type TColorProp = string | string[];

interface ShineBorderProps {
	borderRadius?: number;
	borderWidth?: number;
	class?: string;
	color?: TColorProp;
	duration?: number;
}

export const ShineBorder: ParentComponent<ShineBorderProps> = (props) => {
	const localProps = mergeProps(
		{ borderRadius: 8, borderWidth: 1, color: "#000000", duration: 14 },
		props,
	);
	return (
		<div
			style={{
				"--border-radius": `${localProps.borderRadius}px`,
			}}
			class={cn(
				"relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] bg-white p-3 text-black dark:bg-black dark:text-white",
				localProps.class,
			)}
		>
			<div
				style={{
					"--border-width": `${localProps.borderWidth}px`,
					"--border-radius": `${localProps.borderRadius}px`,
					"--duration": `${localProps.duration}s`,
					"--mask-linear-gradient":
						"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					"--background-radial-gradient": `radial-gradient(transparent,transparent, ${
						Array.isArray(localProps.color)
							? localProps.color.join(",")
							: localProps.color
					},transparent,transparent)`,
				}}
				class={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`}
			/>
			{localProps.children}
		</div>
	);
};
