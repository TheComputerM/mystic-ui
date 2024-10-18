import { useParams } from "@solidjs/router";
import { allDocs } from "content-collections";
import { lazy } from "solid-js";
import { Divider } from "styled-system/jsx";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";

export default function PandaDocsPage() {
	const params = useParams();
	const MDXComponent = lazy(
		() =>
			import(
				`../../../../.content-collections/generated/docs/${params.id}.jsx`
			),
	);
	const document = allDocs.find((doc) => doc._meta.path === params.id);

	if (!document) {
		throw new Error(`Document not found: ${params.id}`);
	}

	return (
		<>
			<Heading textStyle="4xl">{document.title}</Heading>
			<Text color="fg.subtle" textStyle="xl">
				{document.description}
			</Text>
			<Divider my="6" />
			<MDXComponent components={{}} />
		</>
	);
}
