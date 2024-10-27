import { describe, expect, test } from "bun:test";
import { configSchema } from "./utils";

describe("validate schema", () => {
	test("valid panda schema", () => {
		expect(() =>
			configSchema.parse({
				framework: "panda",
				outputPath: "./dist",
				configPath: "panda.config.ts",
			}),
		).not.toThrowError();
	});

	test("valid tailwind schema", () => {
		expect(() =>
			configSchema.parse({
				framework: "tailwind",
				outputPath: "./src/components/mystic-ui/",
				configPath: "tailwind.config.js",
				tailwind: {
					aliases: {
						utils: "@/lib/utils",
					},
				},
			}),
		).not.toThrowError();
	});
});
