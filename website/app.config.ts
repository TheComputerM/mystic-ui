import { defineConfig } from "@solidjs/start/config";
import tsconfigPaths from "vite-tsconfig-paths";
import contentCollections from "@content-collections/solid-start";
import { createHighlighter } from "shiki";

/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
const { default: mdx } = pkg;
import remarkFrontmatter from "remark-frontmatter";
import { visit as remarkVisit, SKIP as REMARK_VISIT_SKIP } from "unist-util-visit";

const highlighter = await createHighlighter({
	themes: ["vesper"],
	langs: ["typescript", "tsx", "javascript", "jsx", "json", "shell"],
});

function remarkCodeBlock() {
	return (tree) => {
		remarkVisit(tree, "code", (node, index, parent) => {
			const rawCodeBlockNode = {
				type: "mdxJsxFlowElement",
				name: "RawCodeBlock",
				attributes: [
					{
						type: "mdxJsxAttribute",
						name: "html",
						value: highlighter.codeToHtml(node.value, {
							theme: "vesper",
							lang: node.lang,
						})
					},
					{
						type: "mdxJsxAttribute",
						name: "codde",
						value: node.value,
					},
					{
						type: "mdxJsxAttribute",
						name: "lang",
						value: node.lang,
					},
				],
				children: [],
				data: {
					_mdxExplicitJsx: true,
				},
			};

			// Replace the code node with the a RawCodeBlock jsx node
			Object.assign(node, rawCodeBlockNode);
			return REMARK_VISIT_SKIP;
		});
	};
}

export default defineConfig({
	extensions: ["mdx"],
	vite: {
		plugins: [
			tsconfigPaths(),
			contentCollections(),
			mdx.withImports({})({
				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "~/tools/solid-mdx",
				remarkPlugins: [remarkFrontmatter, remarkCodeBlock],
			}),
		],
	},
	server: {
		prerender: {
			failOnError: true,
			crawlLinks: true,
		},
		// see https://github.com/solidjs/solid-start/issues/1614
		esbuild: { options: { target: "esnext" } },
	},
});
