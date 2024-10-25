import { describe, expect, test } from "bun:test";
import { transform } from "./components";

describe("fixComponentImports()", () => {
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
