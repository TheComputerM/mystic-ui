import { css } from "styled-system/css";

import { IPhone15 } from "@/ui/iphone-15";

export default function IPhone15Demo() {
	return (
		<div class={css({ position: "relative" })}>
			<IPhone15 class={css({ width: "size.full", height: "size.full" })} />
		</div>
	);
}
