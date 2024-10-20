import { AnimatedShinyText } from "@/ui/animated-shiny-text";
import { TbChevronRight } from "solid-icons/tb";

export default function AnimatedShinyTextDemo() {
	return (
		<div class="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
			<AnimatedShinyText class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
				<span>✨ Introducing Mystic UI</span>
				<TbChevronRight class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
			</AnimatedShinyText>
		</div>
	);
}
