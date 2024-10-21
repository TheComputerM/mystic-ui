import { createListCollection } from "@ark-ui/solid";
import type { RouteSectionProps } from "@solidjs/router";
import { A, useLocation, useNavigate } from "@solidjs/router";
import { allDocs } from "content-collections";
import { TbChevronDown } from "solid-icons/tb";
import {
	type Component,
	For,
	Index,
	type ParentComponent,
	createMemo,
} from "solid-js";
import { css } from "styled-system/css";
import { Container, Divider, Grid, Stack } from "styled-system/jsx";
import { Heading } from "~/components/ui/heading";
import { Select } from "~/components/ui/select";

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

const SelectFramework: Component<{ value: string }> = (props) => {
	interface Item {
		label: string;
		value: string;
		disabled?: boolean;
	}

	const collection = createListCollection<Item>({
		items: [
			{ label: "UnoCSS", value: "unocss", disabled: true },
			{ label: "Tailwind", value: "tailwind" },
			{ label: "Panda", value: "panda" },
		],
	});

	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Select.Root
			size="sm"
			positioning={{ sameWidth: true }}
			value={[props.value]}
			onValueChange={({ value }) => {
				// Replace the current path with the new framework
				const newLocation = location.pathname.replace(props.value, value[0]);
				navigate(newLocation, {
					replace: true,
				});
			}}
			collection={collection}
		>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText />
					<TbChevronDown />
				</Select.Trigger>
			</Select.Control>
			<Select.Positioner>
				<Select.Content>
					<Index each={collection.items}>
						{(item) => (
							<Select.Item item={item()} justifyContent="start" gap="2">
								<Select.ItemText> {item().label}</Select.ItemText>
							</Select.Item>
						)}
					</Index>
				</Select.Content>
			</Select.Positioner>
		</Select.Root>
	);
};

const SideNav: Component<{ framework: string }> = (props) => {
	const categoryMap: Record<string, string> = {
		text: "Text Effects",
		background: "Backgrounds",
	};

	const sections = createMemo(() => [
		{
			title: "Overview",
			links: [
				{ title: "Introduction", href: `/docs/${props.framework}` },
				{ title: "with Panda", href: "/docs/panda/setup" },
				{ title: "with Tailwind", href: "/docs/tailwind/setup" },
			],
		},
		...Object.entries(
			allDocs.reduce(
				(acc: Record<string, { title: string; href: string }[]>, doc) => {
					const category = doc.category;
					if (!acc[category]) {
						acc[category] = [];
					}
					acc[category].push({
						title: doc.title,
						href: `/docs/${props.framework}/components/${doc._meta.path}`,
					});
					return acc;
				},
				{},
			),
		).map(([category, links]) => ({
			title: categoryMap[category],
			links,
		})),
	]);

	return (
		<aside
			style={{
				height: "calc(100vh - 3rem)",
				top: "3rem",
			}}
			class={css({
				position: "sticky",
				display: "flex",
				flexDirection: "column",
				paddingY: 2,
			})}
		>
			<Stack gap="6" flexGrow={1} overflowY="auto">
				<For each={sections()}>
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
			<Divider my="2" />
			<SelectFramework value={props.framework} />
		</aside>
	);
};

export default function DocsLayout(props: RouteSectionProps) {
	return (
		<Container>
			<Grid gridTemplateColumns="224px 1fr" gap="12">
				<SideNav framework={props.params.framework} />
				<main>{props.children}</main>
			</Grid>
		</Container>
	);
}
