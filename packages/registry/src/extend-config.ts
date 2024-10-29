import type { CssKeyframes } from "@pandacss/types";

interface ConfigModifications {
	[k: string]: Partial<{
		animation: Record<string, string>;
		keyframes: CssKeyframes;
	}>;
}

const config: ConfigModifications = {
	"animated-shiny-text": {
		animation: {
			"shiny-text": "shiny-text 8s infinite",
		},
		keyframes: {
			"shiny-text": {
				"0%, 90%, 100%": {
					backgroundPosition: "calc(-100% - var(--shiny-width)) 0",
				},
				"30%, 60%": {
					backgroundPosition: "calc(100% + var(--shiny-width)) 0",
				},
			},
		},
	},
	"retro-grid": {
		animation: {
			grid: "grid 15s linear infinite",
		},
		keyframes: {
			grid: {
				"0%": { transform: "translateY(-50%)" },
				"100%": { transform: "translateY(0)" },
			},
		},
	},
	marquee: {
		animation: {
			marquee: "marquee var(--duration) linear infinite",
			"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		},
		keyframes: {
			marquee: {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(calc(-100% - var(--gap)))" },
			},
			"marquee-vertical": {
				from: { transform: "translateY(0)" },
				to: { transform: "translateY(calc(-100% - var(--gap)))" },
			},
		},
	},
	"border-beam": {
		animation: {
			"border-beam": "border-beam var(--duration) infinite linear",
		},
		keyframes: {
			"border-beam": {
				"100%": {
					offsetDistance: "100%",
				},
			},
		},
	},
	"shine-border": {
		animation: {
			shine: "shine var(--duration) infinite linear",
		},
		keyframes: {
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
		},
	},
	meteors: {
		animation: {
			meteor: "meteor 5s linear infinite",
		},
		keyframes: {
			meteor: {
				"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
				"70%": { opacity: "1" },
				"100%": {
					transform: "rotate(215deg) translateX(-500px)",
					opacity: "0",
				},
			},
		},
	},
	ripple: {
		animation: {
			ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
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
	"shimmer-button": {
		animation: {
			"shimmer-slide":
				"shimmer-slide var(--speed) ease-in-out infinite alternate",
			"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
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
		},
	},
	spotlight: {
		animation: {
			spotlight: "spotlight 2s ease .75s 1 forwards",
		},
		keyframes: {
			spotlight: {
				"0%": {
					opacity: "0",
					transform: "translate(-72%, -62%) scale(0.5)",
				},
				"100%": {
					opacity: "1",
					transform: "translate(-50%,-40%) scale(1)",
				},
			},
		},
	},
	"orbiting-circles": {
		animation: {
			orbit: "orbit var(--duration) linear infinite",
		},
		keyframes: {
			orbit: {
				"0%": {
					transform:
						"rotate(0deg) translateY(var(--radius)) rotate(0deg)",
				},
				"100%": {
					transform:
						"rotate(360deg) translateY(var(--radius)) rotate(-360deg)",
				},
			},
		},
	},
};

export default config;
