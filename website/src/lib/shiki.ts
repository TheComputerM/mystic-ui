"use server";

import { type BundledLanguage, codeToHtml, createHighlighter } from "shiki";

const highlighter = await createHighlighter({
	themes: ["dark-plus"],
	langs: ["typescript", "javascript", "jsx", "tsx", "json", "css"],
});

export function highlight(code: string, lang: BundledLanguage = "typescript") {
	return highlighter.codeToHtml(code, {
		lang,
		theme: "dark-plus",
	});
}
