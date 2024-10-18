// Acts like a JSX factory for compiling MDX documents.

import type { Component } from "solid-js";
import { Divider, styled } from "styled-system/jsx";
import { Link } from "~/components/ui/link";

export const useMDXComponents: () => Record<string, Component> = () => ({
	h1: styled("h1"),
	h2: styled("h2"),
	h3: styled("h3"),
	h4: styled("h4"),
	h5: styled("h5"),
	h6: styled("h6"),
	p: styled("p"),
	a: Link,
	hr: Divider,
});
