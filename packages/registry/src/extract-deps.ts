/**
 * Returns an array of npm dependencies from a component file
 * @param content component file
 * @returns array of npm deps
 */
export function extractDependencies(content: string) {
	// adapted from shadcn
	const npmDependencies = [];
	const importRegex = /from\s+['"]([^'"]+)['"]/g;

	const matches = content.matchAll(importRegex);

	for (const match of matches) {
		const dependency = match[1];
		// Check if dependency is not a relative or alias import
		if (!dependency.startsWith(".") && !dependency.startsWith("@/")) {
			// Split the dependency name on '/'
			const parts = dependency.split("/");
			// Check for scoped package or normal package with optional sub-package
			const isValidDependency =
				parts.length === 2
					? parts[0].startsWith("@") && parts[1].length > 0
					: parts.length === 1;
			// Exclude 'solid', but include their sub-packages
			if (isValidDependency && !(dependency === "solid-js")) {
				npmDependencies.push(dependency);
			}
		}
	}

	return npmDependencies.length ? npmDependencies : undefined;
}
