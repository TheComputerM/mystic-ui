// thanks https://github.com/cschroeter/park-ui/blob/main/website/src/components/ui/stepper.tsx

import type { ParentComponent } from "solid-js";
import { Box, Circle, HStack, Stack } from "styled-system/jsx";
import { Heading } from "./styled/heading";

export const Steps: ParentComponent = (props) => {
	return (
		<Stack gap="8" position="relative">
			<Box
				width="1px"
				height="full"
				bg="border.subtle"
				position="absolute"
				left="4"
				top="0"
			/>
			{props.children}
		</Stack>
	);
};

type StepProps = {
	number: number;
	title: string;
};

export const Step: ParentComponent<StepProps> = (props) => {
	return (
		<Box>
			<HStack gap="4">
				<Circle
					size="8"
					color="fg.default"
					bg="bg.default"
					borderWidth="1px"
					zIndex="1"
					boxShadow="0 0 0 12px var(--colors-bg-surface)"
					fontWeight="semibold"
				>
					{props.number}
				</Circle>
				<Heading as="h3" textStyle="lg">
					{props.title}
				</Heading>
			</HStack>
			<Box pt="2" ps="12" css={{ "&> :last-child": { mb: "0" } }}>
				{props.children}
			</Box>
		</Box>
	);
};
