import { Title } from "@solidjs/meta";
import type { RouteSectionProps } from "@solidjs/router";
import { type Component, lazy } from "solid-js";
import { Dynamic } from "solid-js/web";

export default function SetupPage(props: RouteSectionProps) {
	const pages: Record<string, Component> = {
		panda: lazy(() => import("~/content/pages/setup-panda.mdx")),
		tailwind: lazy(() => import("~/content/pages/setup-tailwind.mdx")),
	};

	return (
		<>
			<Title>Using Mystic UI with {props.params.framework}</Title>
			<Dynamic component={pages[props.params.framework]} />
		</>
	);
}
