import _config, {
	componentTailwindConfig,
} from "@mystic-ui/registry/src/extend-config";
import { merge } from "ts-deepmerge";

const mysticConfig = merge(
	...Object.keys(_config)
		.map((key) => componentTailwindConfig(key))
		.filter((x) => x !== undefined),
);

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: "class",
	content: ["./src/**/*.{tsx,ts,jsx,js}"],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default merge(mysticConfig, config);
