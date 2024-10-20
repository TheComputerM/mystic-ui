import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	presets: ["@pandacss/preset-panda"],
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./.storybook/preview.tsx"],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				animations: {
					"shimmer-slide": {
						value: "shimmer-slide var(--speed) ease-in-out infinite alternate",
					},
					"spin-around": {
						value: "spin-around calc(var(--speed) * 2) infinite linear",
					},
					pulse: { value: "pulse var(--duration) ease-out infinite" },
					marquee: { value: "marquee var(--duration) linear infinite" },
					"marquee-vertical": {
						value: "marquee-vertical var(--duration) linear infinite",
					},
					"border-beam": {
						value: "border-beam calc(var(--duration)*1s) infinite linear",
					},
					shine: { value: "shine var(--duration) infinite linear" },
					grid: { value: "grid 15s linear infinite" },
					gradient: { value: "gradient 8s linear infinite" },
					meteor: { value: "meteor 5s linear infinite" },
					ripple: {
						value:
							"ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
					},
					"shiny-text": { value: "shiny-text 8s infinite" },
					spotlight: { value: "spotlight 2s ease .75s 1 forwards" },
				},
			},
			keyframes: {
				"spin-around": {
					"0%": {
						transform: "translateZ(0) rotate(0)",
					},
					"15%, 35%": {
						transform: "translateZ(0) rotate(90deg)",
					},
					"65%, 85%": {
						transform: "translateZ(0) rotate(270deg)",
					},
					"100%": {
						transform: "translateZ(0) rotate(360deg)",
					},
				},
				"shimmer-slide": {
					to: {
						transform: "translate(calc(100cqw - 100%), 0)",
					},
				},
				pulse: {
					"0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
					"50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				"border-beam": {
					"100%": {
						backgroundPosition: "100%",
					},
				},
				shine: {
					"0%": {
						backgroundPosition: "0% 0%",
					},
					"50%": {
						backgroundPosition: "100% 100%",
					},
					to: {
						backgroundPosition: "0% 0%",
					},
				},
				grid: {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(0)" },
				},
				gradient: {
					to: {
						backgroundPosition: "var(--bg-size) 0",
					},
				},
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
					"70%": { opacity: 1 },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: 0,
					},
				},
				ripple: {
					"0%, 100%": {
						transform: "translate(-50%, -50%) scale(1)",
					},
					"50%": {
						transform: "translate(-50%, -50%) scale(0.9)",
					},
				},
				"shiny-text": {
					"0%, 90%, 100%": {
						backgroundPosition: "calc(-100% - var(--shiny-width)) 0",
					},
					"30%, 60%": {
						backgroundPosition: "calc(100% + var(--shiny-width)) 0",
					},
				},
				spotlight: {
					"0%": {
						opacity: 0,
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: 1,
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
		},
	},
	outdir: "styled-system",
	jsxFactory: "solid",
});
