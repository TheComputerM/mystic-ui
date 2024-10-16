import { TbMoon, TbSun } from "solid-icons/tb";
import { Show, createEffect, createSignal } from "solid-js";
import { IconButton } from "./ui/icon-button";

export const ThemeSwitcher = () => {
	const [darkMode, setDarkMode] = createSignal(false);

	createEffect(() => {
		if (darkMode()) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	});

	return (
		<IconButton
			onClick={() => setDarkMode((theme) => !theme)}
			variant="ghost"
			size="sm"
		>
			<Show when={darkMode()} fallback={<TbMoon />}>
				<TbSun />
			</Show>
		</IconButton>
	);
};
