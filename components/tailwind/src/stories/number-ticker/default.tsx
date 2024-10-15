import { NumberTicker } from "@/ui/number-ticker";

export default function NumberTickerDemo() {
	return (
		<p class="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
			<NumberTicker value={100} />
		</p>
	);
}
