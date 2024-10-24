import type { RegistryEntry } from "@mystic-ui/registry/src/schema";

async function getRegistryEntry(component: string) {
	const res = await fetch(
		`https://raw.githubusercontent.com/TheComputerM/mystic-ui/main/packages/registry/build/${component}.json`,
	);
	const data: RegistryEntry = await res.json();
	return data;
}

export async function addComponent() {}
