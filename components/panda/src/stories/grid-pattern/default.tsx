import { css } from "styled-system/css";

import { GridPattern } from "@/ui/grid-pattern";

export default function GridPatternDashed() {
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
			<p class={css({ zIndex: "10", textStyle: "5xl", fontWeight: "bold" })}>
				Grid Pattern
			</p>
			<GridPattern
				width={30}
				height={30}
				x={-1}
				y={-1}
				class={css({
					maskImage:
						"radial-gradient(350px circle at center,white,transparent)",
				})}
			/>
		</div>
	);
}
