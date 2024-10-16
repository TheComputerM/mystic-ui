"use server";

import { type BundledLanguage, createHighlighter } from "shiki";

const highlighter = await createHighlighter({
	themes: ["vesper"],
	langs: ["typescript", "javascript", "jsx", "tsx", "json", "css"],
});

export function highlight(code: string, lang: BundledLanguage = "tsx") {
	return highlighter.codeToHtml(code, {
		lang,
		theme: "vesper",
	});
}
