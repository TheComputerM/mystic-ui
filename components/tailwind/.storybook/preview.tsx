import "./tailwind.css";
// biome-ignore lint/correctness/noUnusedImports: needed for decorators
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "storybook-solidjs";

const preview: Preview = {
	tags: ["autodocs"],
	decorators: [
		withThemeByClassName({
			themes: {
				light: "",
				dark: "dark",
			},
			defaultTheme: "light",
		}),
		(Story) => (
			// biome-ignore lint/suspicious/noReactSpecificProps: storybook uses react
			<div className="p-2 flex items-center justify-center dark:bg-black dark:text-black">
				<Story />
			</div>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
