import { css } from "styled-system/css";

import { RetroGrid } from "@/ui/retro-grid";

export default function DotPatternDemo() {
	return (
		<div
			class={css({
				position: "relative",
				display: "flex",
				height: "500px",
				width: "full",
				alignItems: "center",
				justifyContent: "center",
			})}
		>
			<span
				class={css({
					zIndex: "10",
					bgGradient: "to-b",
					gradientFrom: "#ffd319",
					gradientVia: "#ff2975",
					gradientTo: "#8c1eff",
					backgroundClip: "text",
					textAlign: "center",
					textStyle: "5xl",
					fontWeight: "bold",
					color: "transparent",
				})}
			>
				Retro Grid
			</span>

			<RetroGrid />
		</div>
	);
}
