import { css } from "styled-system/css";

import { Meteors } from "@/ui/meteors";

export default function MeteorDemo() {
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
			<Meteors number={30} />
			<span
				class={css({
					textStyle: "4xl",
					md: { textStyle: "6xl" },
					fontWeight: "bold",
				})}
			>
				Meteors
			</span>
		</div>
	);
}
