import type { RegistryEntry } from "@mystic-ui/registry/src/schema";
import { useParams } from "@solidjs/router";
import { type Component, For, Show, createResource } from "solid-js";
import { CodeBlock } from "~/components/code-block";
import { Step, Steps } from "~/components/ui/stepper";
import { Tabs } from "~/components/ui/tabs";

const instructions: {
	title: string;
	condition: (entry: RegistryEntry) => boolean;
	component: Component<{ entry: RegistryEntry }>;
}[] = [
	{
		title: "Install dependencies",
		condition: (entry) => !!entry.dependencies,
		component: (props) => (
			<CodeBlock
				code={`npm i ${props.entry.dependencies?.join(" ")}`}
				lang="shell"
			/>
		),
	},
	{
		title: "Copy and paste the component.",
		condition: () => true,
		component: (props) => {
			const params = useParams() satisfies {
				framework: "tailwind" | "panda";
			};
			return <CodeBlock code={props.entry[params.framework].file} lang="tsx" />;
		},
	},
];

async function fetchRegistryEntry(component: string) {
	const response = await fetch(
		`https://raw.githubusercontent.com/TheComputerM/mystic-ui/main/packages/registry/build/${component}.json`,
	);
	return (await response.json()) as RegistryEntry;
}

export const InstallationInstructions: Component<{ component: string }> = (
	props,
) => {
	const [entry] = createResource(() => props.component, fetchRegistryEntry, {
		name: "fetch registry component",
	});

	return (
		<Tabs.Root defaultValue="cli">
			<Tabs.List>
				<Tabs.Trigger value="cli">CLI</Tabs.Trigger>
				<Tabs.Trigger value="manual">Manual</Tabs.Trigger>
				<Tabs.Indicator />
			</Tabs.List>
			<Tabs.Content value="cli">
				<CodeBlock
					code={`npx @mystic-ui/cli components add ${props.component}`}
					lang="shell"
				/>
			</Tabs.Content>
			<Tabs.Content value="manual">
				<Steps>
					<Show when={entry()}>
						<For
							each={instructions.filter(({ condition }) => condition(entry()!))}
						>
							{(instruction, i) => (
								<Step number={i() + 1} title={instruction.title}>
									<instruction.component entry={entry()!} />
								</Step>
							)}
						</For>
					</Show>
				</Steps>
			</Tabs.Content>
		</Tabs.Root>
	);
};
