import { css } from "styled-system/css";

import { FlipText } from "@/ui/flip-text";

export default function FlipTextDemo() {
	return (
		<FlipText
			class={css({
				textStyle: "4xl",
				md: { textStyle: "6xl" },
				fontWeight: "bold",
				letterSpacing: "tight",
			})}
			text="Flip Text"
		/>
	);
}
