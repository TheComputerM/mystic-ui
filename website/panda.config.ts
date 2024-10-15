import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: "styled-system",
	jsxFramework: "solid",
});
