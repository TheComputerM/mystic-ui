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
	createEffect,
	createMemo,
	createSignal,
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

const SelectFramework: Component<Omit<Select.RootProps, "collection">> = (
	props,
) => {
	interface Item {
		label: string;
		value: string;
		disabled?: boolean;
	}

	const collection = createListCollection<Item>({
		items: [
			{ label: "Tailwind", value: "tailwind" },
			{ label: "Panda", value: "panda" },
			{ label: "UnoCSS", value: "unocss", disabled: true },
		],
	});

	return (
		<Select.Root
			size="sm"
			positioning={{ sameWidth: true }}
			{...props}
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
							<Select.Item item={item()}>
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
	const [framework, setFramework] = createSignal("tailwind");

	createEffect(() => {
		if (props.framework) {
			setFramework(props.framework);
		}
	});

	const sections = createMemo(() => [
		{
			title: "Overview",
			links: [{ title: "Introduction", href: "/docs" }],
		},
		{
			title: "Components",
			links: allDocs.map((doc) => ({
				title: doc.title,
				href: `/docs/${framework()}/${doc._meta.path}`,
			})),
		},
	]);

	const navigate = useNavigate();
	const location = useLocation();

	createEffect(() => {
		const newLocation = location.pathname.replace(
			/(panda|tailwind)/,
			framework(),
		);
		navigate(newLocation, {
			replace: true,
		});
	});

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
				paddingBottom: 2,
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
			<SelectFramework
				value={[framework()]}
				onValueChange={({ value }) => setFramework(value[0])}
			/>
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
