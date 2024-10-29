import { OrbitingCircles } from "@/ui/orbiting-circles";
import {
	TbBrand4chan,
	TbBrandBitbucket,
	TbBrandGithubFilled,
	TbBrandReddit,
} from "solid-icons/tb";

export default function OrbitingCirclesDemo() {
	return (
		<div class="relative flex items-center justify-center h-[500px] w-full overflow-hidden">
			<span class="text-4xl md:text-6xl font-bold tracking-tight">Circles</span>
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
