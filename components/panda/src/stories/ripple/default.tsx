import { css } from "styled-system/css";

import { Ripple } from "@/ui/ripple";

export default function RippleDemo() {
	return (
		<div
			class={css({
				position: "relative",
				height: "800px",
				width: "full",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
			})}
		>
			<img
				src="https://raw.githubusercontent.com/solidjs/solid-site/refs/heads/main/src/assets/logo.svg"
				class={css({ width: "20", filter: "auto", grayscale: 1 })}
				alt="Solid JS"
			/>
			<Ripple />
		</div>
	);
}
