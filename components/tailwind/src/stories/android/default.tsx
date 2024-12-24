import { css } from "styled-system/css";

import { Android } from "@/ui/android";

export default function AndroidDemo() {
	return (
		<div class={css({ position: "relative" })}>
			<Android class={css({ width: "size.full", height: "size.full" })} />
		</div>
	);
}
