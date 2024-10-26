// Acts like a JSX factory for compiling MDX documents.

import type { Component } from "solid-js";
import { Box, Divider, styled } from "styled-system/jsx";
import { RawCodeBlock } from "~/components/code-block";
import { Code } from "~/components/ui/code";
import { Heading } from "~/components/ui/heading";
import { Link } from "~/components/ui/link";
import { Text } from "~/components/ui/text";

// biome-ignore lint/suspicious/noExplicitAny: different components have different props
export const useMDXComponents: () => Record<string, Component<any>> = () => ({
	h1: (props) => <Heading as="h1" textStyle="5xl" mb="6" {...props} />,
	h2: (props) => <Heading as="h2" textStyle="3xl" mb="3" {...props} />,
	h3: (props) => <Heading as="h3" textStyle="2xl" {...props} />,
	h4: (props) => <Heading as="h4" textStyle="xl" {...props} />,
	h5: (props) => <Heading as="h5" textStyle="lg" {...props} />,
	h6: (props) => <Heading as="h6" textStyle="md" {...props} />,
	p: (props) => <Text textStyle="lg" my="4" color="fg.muted" {...props} />,
	code: (props) => <Code variant="outline" fontFamily="monospace" {...props} />,
	Text,
	Box,
	RawCodeBlock,
	a: (props) => <Link {...props} />,
	hr: (props) => <Divider my="8" {...props} />,
	i: (props) => <i {...props} />,
	b: (props) => <b {...props} />,
	em: (props) => <em {...props} />,
	strong: (props) => <strong {...props} />,
	ul: (props) => (
		<styled.ul
			marginInlineStart="4"
			spaceY="2"
			listStyleType="disc"
			{...props}
		/>
	),
	li: (props) => <styled.li color="fg.muted" {...props} />,
	br: (props) => <br {...props} />,
});
