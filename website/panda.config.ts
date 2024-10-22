import { defineConfig } from "@pandacss/dev";
import { merge } from "ts-deepmerge";

import pandaConfig from "@mystic-ui/panda/panda.config";

if (!pandaConfig.theme?.extend) {
	throw new Error(
		"Somehow the panda.config.ts file is missing the theme object??",
	);
}

export default defineConfig({
	preflight: true,
	presets: ["@pandacss/preset-panda", "@park-ui/panda-preset"],
	minify: process.env.NODE_ENV === "production",
	// TODO: doesn't work properly with vercel
	// hash: process.env.NODE_ENV === "production",
	include: [
		"../components/panda/src/**/*.tsx",
		"./src/**/*.{js,jsx,ts,tsx,mdx}",
	],
	exclude: [],
	theme: {
		extend: merge(pandaConfig.theme.extend, {
			tokens: {
				fonts: {
					mono: {
						value:
							"ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
					},
				},
			},
		}),
	},
	outdir: "styled-system",
	jsxFramework: "solid",
});
