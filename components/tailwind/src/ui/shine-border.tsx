import { cn } from "@/lib/utils";
import { type ParentComponent, mergeProps } from "solid-js";

export interface ShineBorderProps {
	borderRadius?: number;
	borderWidth?: number;
	class?: string;
	color?: string | string[];
	duration?: number;
}

export const ShineBorder: ParentComponent<ShineBorderProps> = (props) => {
	const localProps = mergeProps(
		{ borderRadius: 8, borderWidth: 2, color: "#000000", duration: 14 },
		props,
	);
	return (
		<div
			style={{
				"--border-radius": `${localProps.borderRadius}px`,
			}}
			class={cn("relative rounded-[--border-radius]", localProps.class)}
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
				class="pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine"
			/>
			{localProps.children}
		</div>
	);
};
