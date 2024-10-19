import { createListCollection } from "@ark-ui/solid";
import { TbBrandGithubFilled, TbChevronDown } from "solid-icons/tb";
import { Index } from "solid-js";
import { css } from "styled-system/css";
import { Box, Container, Divider, HStack } from "styled-system/jsx";
import { ThemeSwitcher } from "./theme-switcher";
import { Badge } from "./ui/badge";
import { IconButton } from "./ui/icon-button";
import { Select } from "./ui/select";

const SelectCSSFramework = () => {
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
			collection={collection}
			variant="ghost"
			defaultValue={["tailwind"]}
			size="sm"
		>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText fontWeight="medium" />
					<TbChevronDown />
				</Select.Trigger>
			</Select.Control>
			<Select.Positioner>
				<Select.Content>
					<Index each={collection.items}>
						{(item) => (
							<Select.Item item={item()}>
								<Select.ItemText>{item().label}</Select.ItemText>
							</Select.Item>
						)}
					</Index>
				</Select.Content>
			</Select.Positioner>
		</Select.Root>
	);
};

export const Navbar = () => {
	return (
		<Box py="2" position="sticky" top="0" zIndex="docked">
			<Container>
				<HStack justify="space-between">
					<HStack>
						<a href="/" class={css({ textStyle: "lg", fontWeight: "bold" })}>
							Mystic UI
						</a>
						<Badge>alpha</Badge>
					</HStack>
					<HStack gap="1">
						<SelectCSSFramework />
						<Divider h="6" mx="2" orientation="vertical" />
						<IconButton
							size="sm"
							variant="ghost"
							asChild={(parentProps) => (
								<a
									href="https://github.com/TheComputerM/mystic-ui"
									target="_blank"
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
		</Box>
	);
};
