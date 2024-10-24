import { defineTokens } from "@pandacss/dev";
import type { ExtendableTheme } from "@pandacss/types";
import { merge } from "ts-deepmerge";
import config from "./extend-config";

export function componentPandaConfig(component: string) {
	if (!(component in config)) {
		return undefined;
	}

	const extend = config[component];

	return {
		theme: {
			extend: {
				tokens: {
					animations: extend.animation
						? defineTokens.animations(
								Object.fromEntries(
									Object.entries(extend.animation).map(([key, value]) => [
										key,
										{ value },
									]),
								),
							)
						: undefined,
				},
				keyframes: extend.keyframes,
			},
		},
	} satisfies {
		theme: ExtendableTheme;
	};
}

export function pandaConfig() {
	const configs = Object.keys(config)
		.map((component) => componentPandaConfig(component))
		.filter((x) => x !== undefined);
	return merge(...configs);
}
