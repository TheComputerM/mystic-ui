import { describe, expect, test } from "bun:test";
import { generateCode, parseModule } from "magicast";
import { mergeConfig, transform } from "../src/commands/components";

describe("transform()", () => {
	test("should fix imports", async () => {
		const output = transform(
			`
import { cn } from "@/lib/utils";
import test from "some-module";
      `,
			{
				framework: "tailwind",
				configPath: "tailwind.config.mjs",
				outputPath: "./src/components/mystic-ui/",
				tailwind: {
					aliases: {
						utils: "mystic-ui/lib/utils",
					},
				},
			},
		);

		expect(output).toBe(`
import { cn } from "mystic-ui/lib/utils";
import test from "some-module";
      `);
	});
});

describe("mergeConfig()", () => {
	test("tailwind.config.js", () => {
		const mod = parseModule(`/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}`);
		mergeConfig(mod, {
			theme: {
				extend: {
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
			},
		});

		const { code } = generateCode(mod);
		expect(code).toMatchSnapshot("tailwind.config.js");
	});

	test("panda.config.ts", () => {
		const mod = parseModule(`import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	presets: ["@pandacss/preset-panda"],

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {},

	// The output directory for your css system
	outdir: "styled-system",

	jsxFramework: "solid",
});
`);
		mergeConfig(mod, {
			theme: {
				extend: {
					tokens: {
						animations: {
							grid: {
								value: "grid 15s linear infinite",
							},
						},
					},
					keyframes: {
						grid: {
							"0%": { transform: "translateY(-50%)" },
							"100%": { transform: "translateY(0)" },
						},
					},
				},
			},
		});

		const { code } = generateCode(mod);
		expect(code).toMatchSnapshot("panda.config.ts");
	});
});
