import { css } from "styled-system/css";

import { GradualSpacing } from "@/ui/gradual-spacing";

export default function GradualSpacingDemo() {
	return (
		<GradualSpacing
			class={css({
				textStyle: "4xl",
				md: { textStyle: "6xl" },
				fontWeight: "bold",
				letterSpacing: "tight",
			})}
			text="Gradual Spacing"
		/>
	);
}
