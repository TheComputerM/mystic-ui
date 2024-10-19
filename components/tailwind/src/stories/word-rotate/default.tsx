import { WordRotate } from "@/ui/word-rotate";

export default function WordRotateDemo() {
	return (
		<div class="overflow-hidden py-2">
			<WordRotate
				class="text-4xl md:text-6xl font-bold"
				words={["Word", "Rotate"]}
			/>
		</div>
	);
}
