import { NoSignalScreen } from "@/ui/no-signal-screen";
import { css } from "styled-system/css";

export default function DotPatternDemo() {
	return (
		<div
			class={css({
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "500px",
				width: "full",
			})}
		>
			<p
				class={css({
					zIndex: "10",
					textStyle: "5xl",
					fontWeight: "bold",
					mixBlendMode: "overlay",
				})}
			>
				No Signal
			</p>
			<NoSignalScreen />
		</div>
	);
}
