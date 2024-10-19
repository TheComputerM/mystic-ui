"use server";

import { type BundledLanguage, codeToHtml } from "shiki";

export async function highlight(code: string, lang: BundledLanguage = "tsx") {
	return await codeToHtml(code, {
		lang,
		theme: "vesper",
	});
}
