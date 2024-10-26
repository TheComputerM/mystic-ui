import { useParams } from "@solidjs/router";
import { useStore } from "@tanstack/solid-store";
import { TbBrandGithubFilled, TbMenu2, TbX } from "solid-icons/tb";
import { type Component, Show } from "solid-js";
import { css } from "styled-system/css";
import { Container, Flex, HStack } from "styled-system/jsx";
import { store } from "~/lib/store";
import { ThemeSwitcher } from "./theme-switcher";
import { Badge } from "./ui/badge";
import { IconButton } from "./ui/icon-button";

const DocsSideNavToggle = () => {
	const params = useParams();
	const open = useStore(store, (state) => state.sideNavOpen);

	return (
		<Show when={params.framework}>
			<IconButton
				variant="ghost"
				size="sm"
				hideFrom="md"
				onClick={() =>
					store.setState((state) => ({
						...state,
						sideNavOpen: !state.sideNavOpen,
					}))
				}
			>
				<Show when={open()} fallback={<TbMenu2 />}>
					<TbX />
				</Show>
			</IconButton>
		</Show>
	);
};

export const Navbar: Component = () => {
	return (
		<Flex
			height="12"
			align="center"
			position="sticky"
			top="0"
			zIndex="docked"
			backgroundColor="bg.canvas/75"
			backdropFilter="auto"
			backdropBlur="md"
		>
			<Container w="full">
				<HStack justify="space-between">
					<HStack>
						<DocsSideNavToggle />
						<a href="/" class={css({ textStyle: "lg", fontWeight: "bold" })}>
							Mystic UI
						</a>
						<Badge>alpha</Badge>
					</HStack>
					<HStack gap="1">
						<IconButton
							size="sm"
							variant="ghost"
							asChild={(parentProps) => (
								<a
									href="https://github.com/TheComputerM/mystic-ui"
									target="_blank"
									aria-label="GitHub"
									{...parentProps()}
								>
									<TbBrandGithubFilled />
								</a>
							)}
						/>
						<ThemeSwitcher />
					</HStack>
				</HStack>
			</Container>
		</Flex>
	);
};
