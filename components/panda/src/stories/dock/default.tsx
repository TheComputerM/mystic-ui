import { css } from "styled-system/css";

import { Dock, DockIcon } from "@/ui/dock";
import { For } from "solid-js";

export default function DockDemo() {
	return (
		<Dock class={css({ my: 2 })}>
			<For each={Array(2).fill(0)}>
				{() => (
					<DockIcon>
						<div
							class={css({
								width: "full",
								height: "full",
								backgroundColor: "black/10",
								_dark: { backgroundColor: "white/40" },
								borderRadius: "full",
							})}
						/>
					</DockIcon>
				)}
			</For>
			<div
				class={css({
					height: "full",
					borderXWidth: "1px",
					marginX: "1",
					borderColor: "neutral.300",
					_dark: { borderColor: "neutral.700" },
				})}
			/>
			<For each={Array(4).fill(0)}>
				{() => (
					<DockIcon>
						<div
							class={css({
								width: "full",
								height: "full",
								backgroundColor: "black/10",
								_dark: { backgroundColor: "white/40" },
								borderRadius: "full",
							})}
						/>
					</DockIcon>
				)}
			</For>
		</Dock>
	);
}
