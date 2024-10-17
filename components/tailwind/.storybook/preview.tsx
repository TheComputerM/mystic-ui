// biome-ignore lint/correctness/noUnusedImports: needed for decorators
import React from "react";
import "./tailwind.css";

const preview = {
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			// biome-ignore lint/suspicious/noReactSpecificProps: storybook uses react
			<div className="p-2 flex items-center justify-center">
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
