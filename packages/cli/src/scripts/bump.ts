const packageJson = await Bun.file("package.json").json();
const newVersion = packageJson.version;
await Bun.write("./src/version.ts", `export default "${newVersion}";`);
