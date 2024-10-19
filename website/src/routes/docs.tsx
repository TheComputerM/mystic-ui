import type { RouteSectionProps } from "@solidjs/router";
import { A } from "@solidjs/router";
import { allDocs } from "content-collections";
import { For, type ParentComponent } from "solid-js";
import { css } from "styled-system/css";
import { Container, Grid, Stack } from "styled-system/jsx";
import { Heading } from "~/components/ui/heading";

const SideNavHeading: ParentComponent = (props) => {
	return (
		<Heading as="h4" mb="1">
			{props.children}
		</Heading>
	);
};

const SideNavLink: ParentComponent<{ href: string }> = (props) => {
	return (
		<A
			href={props.href}
			class={css({ textStyle: "sm" })}
			inactiveClass={css({ color: "fg.subtle" })}
			activeClass={css({ fontWeight: "medium" })}
			end
		>
			{props.children}
		</A>
	);
};

const SideNav = () => {
	const sections = [
		{
			title: "Overview",
			links: [{ title: "Introduction", href: "/docs" }],
		},
		{
			title: "Components",
			links: allDocs.map((doc) => ({
				title: doc.title,
				href: `/docs/panda/${doc._meta.path}`,
			})),
		},
	];

	return (
		<aside>
			<Stack gap="6">
				<For each={sections}>
					{(section) => (
						<Stack gap="2">
							<SideNavHeading>{section.title}</SideNavHeading>
							<For each={section.links}>
								{(link) => (
									<SideNavLink href={link.href}>{link.title}</SideNavLink>
								)}
							</For>
						</Stack>
					)}
				</For>
			</Stack>
		</aside>
	);
};

export default function DocsLayout(props: RouteSectionProps) {
	return (
		<Container>
			<Grid gridTemplateColumns="250px 1fr">
				<SideNav />
				<main>{props.children}</main>
			</Grid>
		</Container>
	);
}
