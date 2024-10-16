import { createListCollection } from "@ark-ui/solid";
import { TbBrandGithubFilled } from "solid-icons/tb";
import { Index } from "solid-js";
import { Box, Container, HStack } from "styled-system/jsx";
import { ThemeSwitcher } from "./theme-switcher";
import { Badge } from "./ui/badge";
import { IconButton } from "./ui/icon-button";
import { Select } from "./ui/select";
import { Text } from "./ui/text";

const SelectCSS = () => {
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
		>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText placeholder="Select a Framework" />
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
						<Text textStyle="lg" fontWeight="bold">
							Mystic UI
						</Text>
						<Badge>alpha</Badge>
					</HStack>
					<HStack>
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
