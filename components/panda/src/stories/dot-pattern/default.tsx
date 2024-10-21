import { DotPattern } from "@/ui/dot-pattern";
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
				})}
			>
				Dot Pattern
			</p>
			<DotPattern
				class={css({
					maskImage:
						"radial-gradient(350px circle at center,white,transparent)",
				})}
			/>
		</div>
	);
}
