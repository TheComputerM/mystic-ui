import type { Config } from "tailwindcss/types";
import { merge } from "ts-deepmerge";
import config from "./extend-config";

export function componentTailwindConfig(component: string) {
	if (!(component in config)) {
		return undefined;
	}

	const extend = config[component];

	return {
		theme: {
			extend,
		},
	} as Config;
}

export function tailwindConfig() {
	const configs = Object.keys(config)
		.map((component) => componentTailwindConfig(component))
		.filter((x) => x !== undefined);
	return merge(...configs);
}
