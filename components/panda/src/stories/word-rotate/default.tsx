import { css } from "styled-system/css";

import { WordRotate } from "@/ui/word-rotate";

export default function WordRotateDemo() {
	return (
		<div class={css({ overflow: "hidden", paddingY: "2" })}>
			<WordRotate
				class={css({
					textStyle: "4xl",
					md: { textStyle: "6xl" },
					fontWeight: "bold",
				})}
				words={["Word", "Rotate"]}
			/>
		</div>
	);
}
