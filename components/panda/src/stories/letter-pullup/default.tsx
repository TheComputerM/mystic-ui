import { css } from "styled-system/css";

import { LetterPullup } from "@/ui/letter-pullup";

export default function LetterPullupDemo() {
	return (
		<LetterPullup
			class={css({
				fontWeight: "bold",
				textStyle: "4xl",
				letterSpacing: "tight",
				marginY: "16",
			})}
			text="Staggered Letter Pull Up"
		/>
	);
}
