import { lazy } from "solid-js";

const sources = import.meta.glob("../stories/**/*.tsx", {
	eager: true,
	query: "?raw",
	import: "default",
});

export function getStory(name: string, example: string) {
	const Component = lazy(() => import(`../stories/${name}/${example}.tsx`));
	return {
		// biome-ignore lint/suspicious/noExplicitAny: props are different for each component
		render: (props: any) => <Component {...props} />,
		parameters: {
			docs: {
				source: {
					code: sources[`../stories/${name}/${example}.tsx`],
				},
			},
		},
	};
}
