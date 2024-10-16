import { useParams } from "@solidjs/router";
import { Container, Grid } from "styled-system/jsx";
import { StoryPreview } from "~/components/story-preview";

export default function PandaDocsPage() {
	const params = useParams();

	return (
		<Container>
			<Grid gridTemplateColumns="250px 1fr">
				<aside>Links</aside>
				<main>
					<StoryPreview component={params.id} name="default" />
				</main>
			</Grid>
		</Container>
	);
}
