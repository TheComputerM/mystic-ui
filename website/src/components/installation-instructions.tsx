import type { Component } from "solid-js";
import { CodeBlock } from "./code-block";
import { Tabs } from "./ui/tabs";

export const InstallationInstructions: Component<{ component: string }> = (
	props,
) => {
	return (
		<Tabs.Root defaultValue="cli">
			<Tabs.List>
				<Tabs.Trigger value="cli">CLI</Tabs.Trigger>
				<Tabs.Trigger value="manual">Manual</Tabs.Trigger>
				<Tabs.Indicator />
			</Tabs.List>
			<Tabs.Content value="cli">
				<CodeBlock code={`npx mystic-ui add ${props.component}`} lang="shell" />
			</Tabs.Content>
			<Tabs.Content value="manual">TODO</Tabs.Content>
		</Tabs.Root>
	);
};
