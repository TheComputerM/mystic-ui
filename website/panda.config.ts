import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: {
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
	},
	outdir: "styled-system",
	jsxFramework: "solid",
});
