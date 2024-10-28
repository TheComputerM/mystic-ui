import { dirname, join } from "node:path";
import type { StorybookConfig } from "storybook-solidjs-vite";

import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	stories: ["../src/stories/**/stories.@(js|jsx|ts|tsx)"],
	addons: [getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-themes")],
	framework: {
		name: getAbsolutePath("storybook-solidjs-vite") as "storybook-solidjs-vite",
		options: {},
	},
	viteFinal(config) {
		return mergeConfig(config, {
			plugins: [tsconfigPaths()],
		});
	},
};

export default config;
