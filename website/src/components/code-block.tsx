import { useClipboard } from "@ark-ui/solid";
import { createAsync } from "@solidjs/router";
import type { BundledLanguage } from "shiki";
import { TbCheck, TbCopy } from "solid-icons/tb";
import type { Component } from "solid-js";
import { css } from "styled-system/css";
import { Box } from "styled-system/jsx";
import { highlight } from "~/lib/shiki";
import { Clipboard } from "./ui/clipboard";
import { IconButton } from "./ui/icon-button";

interface CodeBlockProps {
	code: string;
	lang?: BundledLanguage;
}

export const RawCodeBlock: Component<CodeBlockProps & { html?: string }> = (
	props,
) => {
	const clipboard = useClipboard({ value: props.code });

	return (
		<Clipboard.RootProvider value={clipboard} position="relative" class="dark">
			<Box
				textStyle="sm"
				class={css({
					"&>pre": {
						padding: 4,
						borderWidth: "1px",
						borderColor: "border.accent",
						borderRadius: "l3",
						tabSize: 2,
						overflowX: "auto",
					},
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

export const CodeBlock: Component<CodeBlockProps> = (props) => {
	const html = createAsync(() => highlight(props.code, props.lang));
	return <RawCodeBlock html={html()} code={props.code} />;
};
