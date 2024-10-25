#! /usr/bin/env node

import { Command } from "commander";
import addComponentCommand from "./commands/components";
import initCommand from "./commands/init";

export const program = new Command();

program
	.name("mystic-ui")
	.description("CLI to add mystic components to your project")
	.version("0.0.0-alpha")
	.showHelpAfterError("(add --help for additional information)");

program
	.command("init")
	.description("Configures your project to work with mystic components")
	.action(initCommand);

program
	.command("add")
	.description("Add a component to your project")
	.argument("<component>", "name of component to add")
	.action(addComponentCommand);

await program.parseAsync(process.argv);
