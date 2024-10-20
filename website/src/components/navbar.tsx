import { TbBrandGithubFilled } from "solid-icons/tb";
import { css } from "styled-system/css";
import { Container, Flex, HStack } from "styled-system/jsx";
import { ThemeSwitcher } from "./theme-switcher";
import { Badge } from "./ui/badge";
import { IconButton } from "./ui/icon-button";

export const Navbar = () => {
	return (
		<Flex height="12" align="center" position="sticky" top="0" zIndex="docked">
			<Container w="full">
				<HStack justify="space-between">
					<HStack>
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
