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
import { css, cx } from "styled-system/css";

const Circle: ParentComponent<{ class?: string; ref?: HTMLDivElement }> = (
	props,
) => {
	return (
		<div
			ref={props.ref}
			class={cx(
				css({
					zIndex: "10",
					display: "flex",
					width: "12",
					height: "12",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "full",
					borderWidth: "2px",
					padding: "3",
					boxShadow: "sm",
					backgroundColor: "white",
					borderColor: "neutral.200",
					_dark: {
						backgroundColor: "black",
						borderColor: "neutral.900",
					},
				}),
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
		<div
			class={css({
				position: "relative",
				width: "full",
				marginLeft: "auto",
				marginRight: "auto",
				maxWidth: "sm",
				marginTop: "6",
				marginBottom: "6",
			})}
			ref={containerRef}
		>
			<div
				class={css({
					display: "flex",
					width: "full",
					height: "full",
					flexDirection: "column",
					maxWidth: "lg",
					maxHeight: "200px",
					alignItems: "stretch",
					justifyContent: "space-between",
					gap: "10",
				})}
			>
				<div
					class={css({
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					})}
				>
					<Circle ref={div1Ref}>
						<TbBrandAdobe />
					</Circle>
					<Circle ref={div5Ref}>
						<TbBrandGithubFilled />
					</Circle>
				</div>
				<div
					class={css({
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					})}
				>
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
				<div
					class={css({
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					})}
				>
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
