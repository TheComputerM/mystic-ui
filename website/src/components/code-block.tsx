import { useClipboard } from "@ark-ui/solid";
import type { BundledLanguage } from "shiki";
import { TbCheck, TbCopy } from "solid-icons/tb";
import type { Component } from "solid-js";
import { css } from "styled-system/css";
import { Box } from "styled-system/jsx";
import { Clipboard } from "./ui/clipboard";
import { IconButton } from "./ui/icon-button";

interface CodeBlockProps {
	code: string;
	lang?: BundledLanguage;
}

export const RawCodeBlock: Component<CodeBlockProps & { html: string }> = (
	props,
) => {
	const clipboard = useClipboard({ value: props.code });

	return (
		<Clipboard.RootProvider value={clipboard} position="relative" class="dark">
			<Box
				borderWidth="1px"
				borderColor="border.accent"
				borderRadius="l3"
				textStyle="sm"
				class={css({
					"&>pre": { padding: 4, borderRadius: "inherit", tabSize: 2 },
				})}
				innerHTML={props.html}
			/>
			<Clipboard.Control position="absolute" right="2" top="2">
				<Clipboard.Trigger
					asChild={(parentProps) => (
						<IconButton size="sm" variant="ghost" {...parentProps()}>
							<Clipboard.Indicator copied={<TbCheck />}>
								<TbCopy />
							</Clipboard.Indicator>
						</IconButton>
					)}
				/>
			</Clipboard.Control>
		</Clipboard.RootProvider>
	);
};
