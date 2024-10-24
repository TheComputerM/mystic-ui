import { defineConfig } from "@pandacss/dev";
import { pandaConfig as mysticConfig } from "@mystic-ui/registry/src/panda";
import { merge } from "ts-deepmerge";

const config = defineConfig({
	preflight: true,
	presets: ["@pandacss/preset-panda"],
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./.storybook/preview.tsx"],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: "styled-system",
	jsxFactory: "solid",
});

export default merge(mysticConfig(), config);
