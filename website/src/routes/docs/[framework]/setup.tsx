import type { RouteSectionProps } from "@solidjs/router";
import { Show } from "solid-js";
import PandaSetupPage from "~/content/overview/panda";
import TailwindSetupPage from "~/content/overview/tailwind";

export default function SetupPage(props: RouteSectionProps) {
	return (
		<Show
			when={props.params.framework === "tailwind"}
			fallback={<PandaSetupPage />}
		>
			<TailwindSetupPage />
		</Show>
	);
}
