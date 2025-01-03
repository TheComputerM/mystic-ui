import { css } from "styled-system/css";

import { WordFadeIn } from "@/ui/word-fade-in";

export default function WordFadeInDemo() {
	return (
		<WordFadeIn
			class={css({
				textStyle: "4xl",
				md: { textStyle: "6xl" },
				letterSpacing: "tight",
				fontWeight: "bold",
			})}
			text="Word Fade In"
		/>
	);
}
