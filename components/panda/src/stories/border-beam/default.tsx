import { css } from "styled-system/css";

import { BorderBeam } from "@/ui/border-beam";

export default function BorderBeamDemo() {
	return (
		<div
			class={css({
				position: "relative",
				height: "300px",
				width: "full",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
				borderRadius: "lg",
				boxShadow: "lg",
			})}
		>
			<span
				class={css({
					textStyle: "4xl",
					md: { textStyle: "6xl" },
					fontWeight: "bold",
				})}
			>
				Border Beam
			</span>
			<BorderBeam />
		</div>
	);
}
