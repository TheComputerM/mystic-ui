import { css, cx } from "styled-system/css";

import { Spotlight } from "@/ui/spotlight";

export default function SpotlightDemo() {
	return (
		<div
			class={cx(
				css({
					height: "500px",
					width: "full",
					borderRadius: "md",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					backgroundColor: "black",
				}),
				"dark",
			)}
		>
			<Spotlight class={css({ left: "16", top: "-4" })} fill="white" />
			<h1
				class={css({
					bgGradient: "to-b",
					gradientFrom: "black",
					gradientTo: "gray.300/80",
					_dark: {
						gradientFrom: "white",
						gradientTo: "slate.900/10",
					},
					backgroundClip: "text",
					textStyle: "4xl",
					md: { textStyle: "8xl" },
					fontWeight: "bold",
					color: "transparent",
				})}
			>
				Spotlight
			</h1>
		</div>
	);
}
