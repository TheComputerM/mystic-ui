import { tailwindConfig as mysticConfig } from "@mystic-ui/registry/src/tailwind";
import { merge } from "ts-deepmerge";


/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: "class",
	content: ["./src/**/*.{tsx,ts,jsx,js}"],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default merge(mysticConfig(), config);
