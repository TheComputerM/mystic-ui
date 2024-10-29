import { css } from "styled-system/css";

import { OrbitingCircles } from "@/ui/orbiting-circles";
import {
	TbBrand4chan,
	TbBrandBitbucket,
	TbBrandGithubFilled,
	TbBrandReddit,
} from "solid-icons/tb";

export default function OrbitingCirclesDemo() {
	return (
		<div
			class={css({
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "500px",
				width: "full",
				overflow: "hidden",
			})}
		>
			<span
				class={css({
					textStyle: "4xl",
					md: { textStyle: "6xl" },
					fontWeight: "bold",
					letterSpacing: "tight",
				})}
			>
				Circles
			</span>
			<OrbitingCircles radius={80}>
				<TbBrandGithubFilled size="28" />
			</OrbitingCircles>
			<OrbitingCircles radius={80} delay={10}>
				<TbBrandBitbucket size="28" />
			</OrbitingCircles>

			<OrbitingCircles reverse radius={160}>
				<TbBrandReddit size="28" />
			</OrbitingCircles>
			<OrbitingCircles reverse radius={160} delay={10}>
				<TbBrand4chan size="28" />
			</OrbitingCircles>
		</div>
	);
}
