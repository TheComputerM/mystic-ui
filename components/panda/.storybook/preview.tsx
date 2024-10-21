import "./panda.css";
// biome-ignore lint/correctness/noUnusedImports: needed for decorators
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "storybook-solidjs";
import { css } from "../styled-system/css";

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
				// biome-ignore lint/suspicious/noReactSpecificProps: storybook uses react
				className={css({
					_dark: { backgroundColor: "black", color: "white" },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					p: '2',
				})}
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
