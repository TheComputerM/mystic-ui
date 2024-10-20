import { defineConfig } from "@pandacss/dev";
import { merge } from "ts-deepmerge";

import pandaConfig from "@mystic-ui/panda/panda.config";

if (!pandaConfig.theme) {
	throw new Error("Somehow the panda.config.ts file is missing the theme object??");
}

export default defineConfig({
	preflight: true,
	presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
	include: [
		"./src/**/*.{js,jsx,ts,tsx,mdx}",
		"../node_modules/@mystic-ui/panda/src/**/*.tsx",
	],
	exclude: [],
	theme: merge(pandaConfig.theme, {
		extend: {
			tokens: {
				fonts: {
					mono: {
						value:
							"ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
					},
				},
			},
		},
	}),
	outdir: "styled-system",
	jsxFramework: "solid",
});
