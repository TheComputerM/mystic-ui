import { DotPattern } from "@mystic-ui/panda/src/ui/dot-pattern";
import { Marquee } from "@mystic-ui/panda/src/ui/marquee";
import { ShineBorder } from "@mystic-ui/panda/src/ui/shine-border";
import { WordRotate } from "@mystic-ui/panda/src/ui/word-rotate";
import { TbBrandGithub, TbBrandSolidjs, TbBrandTailwind } from "solid-icons/tb";
import { For } from "solid-js";
import { css } from "styled-system/css";
import {
	Box,
	Center,
	Container,
	Flex,
	HStack,
	Stack,
	Wrap,
} from "styled-system/jsx";
import { linkOverlay } from "styled-system/patterns";
import { CodeBlock } from "~/components/code-block";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";

const CompatileEcosystem = () => {
	const ecosystem = [
		{
			icon: <TbBrandSolidjs size="1.5em" />,
			label: "SolidJS",
		},
		{
			icon: (
				<svg height="1em" viewBox="0 0 90 32">
					<title>Motion</title>
					<path
						d="M 33.982 0 L 16.2 31.972 L 0 31.972 L 13.885 7.007 C 16.038 3.137 21.409 0 25.882 0 Z M 73.709 7.993 C 73.709 3.579 77.336 0 81.809 0 C 86.283 0 89.909 3.579 89.909 7.993 C 89.909 12.407 86.283 15.986 81.809 15.986 C 77.336 15.986 73.709 12.407 73.709 7.993 Z M 37.02 0 L 53.22 0 L 35.438 31.972 L 19.238 31.972 Z M 56.153 0 L 72.354 0 L 58.468 24.965 C 56.316 28.835 50.945 31.972 46.471 31.972 L 38.371 31.972 Z"
						fill="currentColor"
					/>
				</svg>
			),
			label: "Motion",
		},
		{
			icon: <TbBrandTailwind size="1.5em" />,
			label: "TailwindCSS",
		},
		{
			icon: (
				<svg
					height="1.5em"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>PandaCSS</title>
					<path
						d="M10.7608 0.390669C9.38613 -0.0126127 7.98396 -0.067426 6.55506 0.0630881C5.75542 0.147945 4.98667 0.310054 4.24518 0.594509C2.64244 1.20936 1.43903 2.27424 0.72147 3.87754C0.207033 5.02698 0.0211109 6.24802 0.0017347 7.50081C-0.0187424 8.8248 0.143717 10.1305 0.401862 11.4249C0.635852 12.5983 0.947463 13.7487 1.39249 14.8591C1.43477 14.9646 1.48743 15.0002 1.60028 15C3.0078 14.9969 4.41533 14.9969 5.82286 14.9969C6.23955 14.9969 6.65623 14.9969 7.07292 14.9968C7.10483 14.9968 7.13673 14.995 7.17342 14.993C7.19215 14.9919 7.21213 14.9908 7.23399 14.9898C7.22553 14.9693 7.21796 14.9504 7.21087 14.9327C7.19692 14.8979 7.18479 14.8676 7.17125 14.838C7.06947 14.6156 6.96558 14.3942 6.86169 14.1728C6.63635 13.6924 6.41101 13.2121 6.20721 12.7224C5.5891 11.2373 5.11575 9.7082 4.9713 8.08959C4.90756 7.37541 4.91641 6.66531 5.11044 5.96941C5.33222 5.17396 5.80814 4.6124 6.59715 4.37763C7.32168 4.16204 8.05629 4.16346 8.77688 4.40144C9.42 4.61383 9.8393 5.06248 10.0176 5.73423C10.1546 6.25013 10.1546 6.77159 10.051 7.29169C9.97115 7.69214 9.81051 8.05756 9.52137 8.34988C9.00271 8.87423 8.35495 8.9948 7.6599 8.95462C7.53624 8.94747 7.41295 8.93362 7.28592 8.91936C7.22642 8.91267 7.16609 8.9059 7.10452 8.89968C7.10629 8.91977 7.10727 8.93828 7.10819 8.95562C7.10999 8.98973 7.11156 9.01931 7.11843 9.04755C7.14805 9.16913 7.17627 9.29115 7.2045 9.41319C7.27249 9.70715 7.3405 10.0012 7.42793 10.289C7.59961 10.8542 7.79925 11.4058 8.02556 11.9443C9.63883 11.8158 11.1248 11.4062 12.7019 10.4393C12.7256 10.4241 12.7471 10.4103 12.7686 10.3966C13.4461 9.96587 13.9944 9.40712 14.3725 8.68563C14.9848 7.51725 15.1042 6.26777 14.9223 4.97808C14.7345 3.64712 14.1497 2.52993 13.1429 1.6536C12.4446 1.0458 11.6371 0.647746 10.7608 0.390669Z"
						fill="currentColor"
					/>
				</svg>
			),
			label: "PandaCSS",
		},
	];

	return (
		<Wrap
			gap={{ base: "3", md: "6" }}
			color="fg.muted"
			textStyle={{ base: "sm", md: "lg" }}
			fontWeight="medium"
			justify={{ base: "center", md: "start" }}
		>
			<For each={ecosystem}>
				{({ icon, label }) => (
					<HStack gap="2">
						{icon}
						{label}
					</HStack>
				)}
			</For>
		</Wrap>
	);
};

export default function Home() {
	return (
		<>
			<Container minHeight="screen" display="grid" alignItems="center">
				<Flex direction={{ base: "column", lg: "row" }} gap="12">
					<Stack flexBasis="3/5" gap="8" py="2">
						<Heading
							as="h1"
							textStyle={{ base: "4xl", sm: "6xl" }}
							fontWeight="bolder"
						>
							UI Components that <br /> help you{" "}
							<div class={css({ display: "inline-flex", overflowY: "hidden" })}>
								<WordRotate
									words={[
										"code less",
										"create more",
										"build faster",
										"launch sooner",
									]}
								/>
							</div>
						</Heading>
						<Text textStyle={{ base: "lg", sm: "xl" }}>
							Empower your SolidJS projects with stunning open-source UI
							components and use them without having to worry about styling and
							animations.
						</Text>
						<Wrap>
							<Button
								size="2xl"
								asChild={(parentProps) => (
									<a href="/docs/tailwind" {...parentProps()}>
										Explore Components
									</a>
								)}
							/>
							<Button
								size="2xl"
								variant="outline"
								asChild={(parentProps) => (
									<a
										target="_blank"
										href="https://github.com/TheComputerM/mystic-ui"
										{...parentProps()}
									>
										<TbBrandGithub />
										Star on GitHub
									</a>
								)}
							/>
						</Wrap>
						<CompatileEcosystem />
					</Stack>
					<Center flexBasis="2/5" position="relative" minHeight="sm">
						<DotPattern
							class={css({
								maskImage:
									"radial-gradient(250px circle at center,white,transparent)",
							})}
						/>
						<ShineBorder
							class={css({ p: 0.5, boxShadow: "md" })}
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<CodeBlock
								code="npx @mystic-ui/cli init"
								lang="shell"
								class={css({ minWidth: "xs" })}
							/>
						</ShineBorder>
					</Center>
				</Flex>
			</Container>
			<Box position="relative">
				<Marquee repeat={10} duration={4}>
					<Heading
						as="h3"
						fontWeight="black"
						textStyle="4xl"
						textTransform="uppercase"
					>
						Leave a Star
					</Heading>
				</Marquee>
				<Marquee repeat={10} duration={4} reverse>
					<Heading
						as="h3"
						fontWeight="black"
						textStyle="4xl"
						textTransform="uppercase"
					>
						Leave a Star
					</Heading>
				</Marquee>
				<a
					href="https://github.com/TheComputerM/mystic-ui"
					target="_blank"
					rel="noreferrer"
					class={linkOverlay()}
				>
					<Text display="none">Leave a Star</Text>
				</a>
			</Box>
		</>
	);
}
