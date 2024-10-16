import { useClipboard } from "@ark-ui/solid";
import type { BundledLanguage } from "shiki";
import { TbCheck, TbCopy } from "solid-icons/tb";
import type { Component } from "solid-js";
import { Box } from "styled-system/jsx";
import { highlight } from "~/lib/shiki";
import { Clipboard } from "./ui/clipboard";
import { IconButton } from "./ui/icon-button";

export const CodeBlock: Component<{ code: string; lang?: BundledLanguage }> = (
	props,
) => {
	const html = highlight(props.code, props.lang);
	const clipboard = useClipboard({ value: props.code });

	return (
		<Clipboard.RootProvider value={clipboard}>
			<Box innerHTML={html} />
			<Clipboard.Control>
				<Clipboard.Trigger
					asChild={(parentProps) => (
						<IconButton size="xs" {...parentProps()}>
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
