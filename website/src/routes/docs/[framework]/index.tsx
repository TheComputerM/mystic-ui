import { Meta, Title } from "@solidjs/meta";
import type { RouteSectionProps } from "@solidjs/router";

import MDXContent from "~/content/pages/introduction.mdx";

export default function IntroductionPage(props: RouteSectionProps) {
	return (
		<>
			<Title>Introduction | Mystic UI</Title>
			<Meta
				name="description"
				content="Collection of beautiful UI components for SolidJS that work with Tailwind and PandaCSS, an unofficial port of magic ui to solidjs."
			/>
			<MDXContent />
		</>
	);
}
