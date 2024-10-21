import { css } from "styled-system/css";

import { Safari } from "@/ui/safari";

export default function SafariDemo() {
	return (
		<div class={css({ position: "relative" })}>
			<Safari
				url="start.solidjs.com"
				class={css({ height: "full", width: "full" })}
			/>
		</div>
	);
}
