import { defineConfig } from "@solidjs/start/config";
import tsconfigPaths from 'vite-tsconfig-paths'
import contentCollections from "@content-collections/solid-start";

export default defineConfig({
  vite: {
    plugins: [tsconfigPaths(), contentCollections()]
  }
});
