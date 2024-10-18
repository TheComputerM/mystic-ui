import type { RouteSectionProps } from "@solidjs/router";
import { Container, Grid } from "styled-system/jsx";

export default function DocsLayout(props: RouteSectionProps) {
	return (
		<Container>
			<Grid gridTemplateColumns="250px 1fr">
				<aside>Links</aside>
				<main>{props.children}</main>
			</Grid>
		</Container>
	);
}
