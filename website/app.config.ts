import { defineConfig } from "@solidjs/start/config";
import tsconfigPaths from "vite-tsconfig-paths";
import contentCollections from "@content-collections/solid-start";

export default defineConfig({
	vite: {
		plugins: [tsconfigPaths(), contentCollections()],
	},

	server: {
		prerender: {
			failOnError: true,
			crawlLinks: true,
		},
		// see https://github.com/solidjs/solid-start/issues/1614
		esbuild: { options: { target: "esnext" } },
	},
});
