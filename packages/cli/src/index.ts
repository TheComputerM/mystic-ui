import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
	.command("init", "create a mystic config file", () => {
		console.log("init");
	})
	.command(
		"components add <component>",
		"add a component to your project",
		(yargs) => {
			return yargs.positional("component", {
				type: "string",
				describe: "the name of the component",
				demandOption: true,
			});
		},
		(argv) => {
			console.log("Adding component", argv.component);
		},
	)
	.demandCommand()
	.help()
	.parse();
