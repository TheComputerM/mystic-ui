import { css } from "styled-system/css";

import { SparklesText } from "@/ui/sparkles-text";

export default function SparklesTextDemo() {
	return (
		<p
			class={css({
				textStyle: "4xl",
				md: { textStyle: "6xl" },
				fontWeight: "bold",
			})}
		>
			<SparklesText>Mystic</SparklesText> UI
		</p>
	);
}
