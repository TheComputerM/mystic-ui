import {
	TbBell,
	TbCalendar,
	TbCursorText,
	TbFileText,
	TbGlobe,
} from "solid-icons/tb";

import { BentoCard, BentoGrid } from "@/ui/bento-grid";
import { For } from "solid-js";

const features = [
	{
		Icon: TbFileText,
		name: "Save your files",
		description: "We automatically save your files as you type.",
		href: "/",
		cta: "Learn more",
		background: (
			<img
				class="absolute -right-20 -top-20 opacity-60"
				aria-hidden="true"
				alt="bg"
			/>
		),
		class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
	},
	{
		Icon: TbCursorText,
		name: "Full text search",
		description: "Search through all your files in one place.",
		href: "/",
		cta: "Learn more",
		background: (
			<img
				class="absolute -right-20 -top-20 opacity-60"
				aria-hidden="true"
				alt="bg"
			/>
		),
		class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	},
	{
		Icon: TbGlobe,
		name: "Multilingual",
		description: "Supports 100+ languages and counting.",
		href: "/",
		cta: "Learn more",
		background: (
			<img
				class="absolute -right-20 -top-20 opacity-60"
				aria-hidden="true"
				alt="bg"
			/>
		),
		class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
	},
	{
		Icon: TbCalendar,
		name: "Calendar",
		description: "Use the calendar to filter your files by date.",
		href: "/",
		cta: "Learn more",
		background: (
			<img
				class="absolute -right-20 -top-20 opacity-60"
				aria-hidden="true"
				alt="bg"
			/>
		),
		class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	},
	{
		Icon: TbBell,
		name: "Notifications",
		description:
			"Get notified when someone shares a file or mentions you in a comment.",
		href: "/",
		cta: "Learn more",
		background: (
			<img
				class="absolute -right-20 -top-20 opacity-60"
				aria-hidden="true"
				alt="bg"
			/>
		),
		class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	},
];

export default function BentoDemo() {
	return (
		<BentoGrid class="lg:grid-rows-3">
			<For each={features}>{(feature) => <BentoCard {...feature} />}</For>
		</BentoGrid>
	);
}
