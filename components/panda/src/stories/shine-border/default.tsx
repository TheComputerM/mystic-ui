import { css } from "styled-system/css";

import { ShineBorder } from "@/ui/shine-border";

export default function ShineBorderDemo() {
	return (
		<ShineBorder
			class={css({
				position: "relative",
				display: "flex",
				height: "500px",
				width: "full",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
				borderRadius: "lg",
				boxShadow: "lg",
			})}
			color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
		>
			<span
				class={css({
					textStyle: "4xl",
					md: { textStyle: "6xl" },
					fontWeight: "bold",
				})}
			>
				Shine Border
			</span>
		</ShineBorder>
	);
}
