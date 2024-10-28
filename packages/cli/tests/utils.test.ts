import { describe, expect, test } from "bun:test";
import { configSchema } from "../src/utils";

describe("validate schema", () => {
	test("panda", () => {
		expect(() =>
			configSchema.parse({
				framework: "panda",
				outputPath: "./src/components/mystic-ui/",
				configPath: "panda.config.ts",
			}),
		).not.toThrowError();
	});

	test("tailwind", () => {
		expect(() =>
			configSchema.parse({
				framework: "tailwind",
				outputPath: "./src/components/mystic-ui/",
				configPath: "tailwind.config.js",
			}),
		).toThrowError();

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
