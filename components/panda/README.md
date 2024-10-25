# PandaCSS + Mystic UI

You can use Mystic UI with your PandaCSS projects, also works with panda based frameworks like [Park UI](https://park-ui.com/).

## Setup

Run `npx mystic-ui@latest init` with whatever package manager you prefer and make sure you choose *panda* as your css framework.

**panda.config.ts**
```ts
export default defineConfig({
  //...
  presets: ["@pandacss/preset-panda"] // make sure the panda preset is included in your config
})
```