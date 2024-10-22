"use server";

import { cache } from "@solidjs/router";

// biome-ignore lint/suspicious/noExplicitAny: This is a temporary type
export type RegistryEntry = any;

/**
 * Get the registry entry for a component
 */
export const getRegistryEntry = cache(async (component: string) => {
	const registryEntry: RegistryEntry = await import(
		`../../../packages/registry/build/${component}.json`
	).then((module) => module.default);
	return registryEntry;
}, "registry-entry");
