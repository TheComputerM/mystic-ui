import type { RouteSectionProps } from "@solidjs/router";
import { Stack } from "styled-system/jsx";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";

export default function IntroductionPage(props: RouteSectionProps) {
	return (
		<Stack gap="6">
			<Heading textStyle="4xl">Mystic UI</Heading>
			<Text textStyle="lg" color="fg.muted">
				Create awesome user interfaces with components you can copy and paste
				that work with {props.params.framework} css.
			</Text>
		</Stack>
	);
}
