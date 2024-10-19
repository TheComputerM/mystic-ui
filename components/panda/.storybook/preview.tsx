import "./panda.css";
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
			<div
				style={{
					display: "flex",
					padding: "0.5rem",
					// @ts-ignore
					"justify-content": "center",
					"align-items": "center",
				}}
			>
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
