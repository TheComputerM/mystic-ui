import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	presets: ["@pandacss/preset-panda"],

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				animations: {
					ripple: {
						value:
							"ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
					},
				},
			},
			keyframes: {
				ripple: {
					"0%, 100%": {
						transform: "translate(-50%, -50%) scale(1)",
					},
					"50%": {
						transform: "translate(-50%, -50%) scale(0.9)",
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",

	jsxFramework: "solid",
});
