import { Dock, DockIcon } from "@/ui/dock";
import { For } from "solid-js";

export default function DockDemo() {
	return (
		<Dock class="my-2">
			<For each={Array(2).fill(0)}>
				{() => (
					<DockIcon>
						<div class="size-full bg-black/10 dark:bg-white/40 rounded-full" />
					</DockIcon>
				)}
			</For>
			<div class="h-full border-x mx-1" />
			<For each={Array(4).fill(0)}>
				{() => (
					<DockIcon>
						<div class="size-full bg-black/10 dark:bg-white/40 rounded-full" />
					</DockIcon>
				)}
			</For>
		</Dock>
	);
}
