import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/ui/animated-beam";
import {
	TbBrand4chan,
	TbBrandAbstract,
	TbBrandAdobe,
	TbBrandAmongUs,
	TbBrandApple,
	TbBrandAppstore,
	TbBrandGithubFilled,
} from "solid-icons/tb";
import type { ParentComponent } from "solid-js";

const Circle: ParentComponent<{ class?: string; ref?: HTMLDivElement }> = (
	props,
) => {
	return (
		<div
			ref={props.ref}
			class={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				props.class,
			)}
		>
			{props.children}
		</div>
	);
};

export default function AnimatedBeamDemo() {
	let containerRef!: HTMLDivElement;
	let div1Ref!: HTMLDivElement;
	let div2Ref!: HTMLDivElement;
	let div3Ref!: HTMLDivElement;
	let div4Ref!: HTMLDivElement;
	let div5Ref!: HTMLDivElement;
	let div6Ref!: HTMLDivElement;
	let div7Ref!: HTMLDivElement;

	return (
		<div class="relative w-full mx-auto max-w-sm my-6" ref={containerRef}>
			<div class="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
				<div class="flex flex-row items-center justify-between">
					<Circle ref={div1Ref}>
						<TbBrandAdobe />
					</Circle>
					<Circle ref={div5Ref}>
						<TbBrandGithubFilled />
					</Circle>
				</div>
				<div class="flex flex-row items-center justify-between">
					<Circle ref={div2Ref}>
						<TbBrandApple />
					</Circle>
					<Circle ref={div4Ref}>
						<TbBrandAmongUs size="24" />
					</Circle>
					<Circle ref={div6Ref}>
						<TbBrandAppstore />
					</Circle>
				</div>
				<div class="flex flex-row items-center justify-between">
					<Circle ref={div3Ref}>
						<TbBrand4chan />
					</Circle>
					<Circle ref={div7Ref}>
						<TbBrandAbstract />
					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div4Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div4Ref}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
				reverse
			/>
		</div>
	);
}
