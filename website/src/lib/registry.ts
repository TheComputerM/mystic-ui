"use server";

import type { RegistryEntry } from "@mystic-ui/registry/src/schema";
import { cache } from "@solidjs/router";

/**
 * Get the registry entry for a component
 */
export const getRegistryEntry = cache(async (component: string) => {
	const registryEntry: RegistryEntry = await import(
		`../../../packages/registry/build/${component}.json`
	).then((module) => module.default);
	return registryEntry;
}, "registry-entry");
