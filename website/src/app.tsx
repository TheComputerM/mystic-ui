import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type ParentComponent, Suspense } from "solid-js";
import "@fontsource-variable/rubik";
import "./app.css";
import { Navbar } from "./components/navbar";

const Layout: ParentComponent = (props) => {
	return (
		<main>
			<Navbar />
			<Suspense>{props.children}</Suspense>
		</main>
	);
};

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Mystic UI</Title>

					<Layout>{props.children}</Layout>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
