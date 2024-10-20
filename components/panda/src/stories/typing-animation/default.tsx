import { css } from "styled-system/css";

import { TypingAnimation } from "@/ui/typing-animation";

export default function TypingAnimationDemo() {
	return (
		<h1
			class={css({
				textStyle: "4xl",
				md: { textStyle: "6xl" },
				fontWeight: "bold",
			})}
		>
			<TypingAnimation text="Typing Animation" />
		</h1>
	);
}
