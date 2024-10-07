import { css, cx } from "styled-system/css";

import {
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";

export interface ShimmerButtonProps
	extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	shimmerColor?: string;
	shimmerSize?: string;
	borderRadius?: string;
	shimmerDuration?: string;
	background?: string;
	class?: string;
}

export const ShimmerButton: ParentComponent<ShimmerButtonProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"shimmerColor",
		"shimmerSize",
		"shimmerDuration",
		"borderRadius",
		"background",
		"class",
		"children",
	]);
	const localProps = mergeProps(
		{
			shimmerColor: "#ffffff",
			shimmerSize: "0.05em",
			shimmerDuration: "3s",
			borderRadius: "100px",
			background: "rgba(0, 0, 0, 1)",
		},
		_localProps,
	);
	return (
		<button
			style={{
				"--spread": "90deg",
				"--shimmer-color": localProps.shimmerColor,
				"--radius": localProps.borderRadius,
				"--speed": localProps.shimmerDuration,
				"--cut": localProps.shimmerSize,
				"--bg": localProps.background,
			}}
			class={cx(
				css({
					position: "relative",
					zIndex: "0",
					display: "flex",
					cursor: "pointer",
					alignItems: "center",
					justifyContent: "center",
					overflow: "hidden",
					whiteSpace: "nowrap",
					borderWidth: "1px",
					borderColor: "white/10",
					paddingLeft: "6",
					paddingRight: "6",
					paddingTop: "3",
					paddingBottom: "3",
					color: "white",
					background: "var(--bg)",
					borderRadius: "var(--radius)",
					_dark: { color: "black" },
				}),
				css({
					transform:
						"translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
					transitionProperty: "transform",
					transitionTimingFunction: "in.out",
					transitionDuration: "300",
					_active: {
						transform:
							"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
					},
				}),
				localProps.class,
			)}
			{...forwardProps}
			ref={forwardProps.ref}
		>
			{/* spark container */}
			<div
				class={cx(
					css({ zIndex: ".z-30", filter: "2px" }),
					css({
						position: "absolute",
						inset: "0",
						overflow: "visible",
						containerType: "size",
					}),
				)}
			>
				{/* spark */}
				<div
					class={css({
						position: "absolute",
						inset: "0",
						height: "100cqh",
						transform: "translate(calc(100cqw - 100%), 0)",
						animation: "shimmer.slide",
						aspectRatio: 1,
						borderRadius: "0",
						mask: "none",
					})}
				>
					{/* spark before */}
					<div
						class={css({
							transform:
								"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
							animation: "spin.around",
							position: "absolute",
							inset: ".inset-full",
							width: "auto",
							background:
								"conic.gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))",
							translate: "0_0",
						})}
					/>
				</div>
			</div>
			{localProps.children}

			{/* Highlight */}
			<div
				class={cx(
					css({
						position: "absolute",
						width: "size.full",
						height: "size.full",
					}),

					css({
						borderRadius: "2xl",
						paddingLeft: "4",
						paddingRight: "4",
						paddingTop: "1.5",
						paddingBottom: "1.5",
						fontSize: "sm",
						lineHeight: "sm",
						fontWeight: "medium",
						boxShadow: "inset_0_.8px_10px_#ffffff1f",
					}),

					// transition
					css({
						transform:
							"translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
						transitionProperty: "all",
						transitionTimingFunction: "in.out",
						transitionDuration: "300",
					}),

					// on hover
					css({ _groupHover: { boxShadow: "inset_0_.6px_10px_#ffffff3f" } }),

					// on click
					css({ _groupActive: { boxShadow: "inset_0_.10px_10px_#ffffff3f" } }),
				)}
			/>

			{/* backdrop */}
			<div
				class={css({
					position: "absolute",
					zIndex: ".z-20",
					background: "var(--bg)",
					borderRadius: "var(--radius)",
					inset: "var(--cut)",
				})}
			/>
		</button>
	);
};
