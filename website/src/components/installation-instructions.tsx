import type { Component } from "solid-js";
import { CodeBlock } from "./code-block";
import { Step, Steps } from "./ui/stepper";
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
			<Tabs.Content value="manual">
				<Steps>
					<Step number="1" title="Step 1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iure
						vel inventore eveniet possimus nihil natus illum perspiciatis cumque
						facere exercitationem iste accusantium recusandae fuga, vitae esse
						neque quisquam ducimus!
					</Step>
				</Steps>
			</Tabs.Content>
		</Tabs.Root>
	);
};
