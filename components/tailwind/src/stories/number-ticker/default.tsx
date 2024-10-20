import { NumberTicker } from "@/ui/number-ticker";

export default function NumberTickerDemo() {
	return (
		<p class="text-4xl md:text-6xl font-bold">
			<NumberTicker value={100} />
		</p>
	);
}
