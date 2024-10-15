import { WordRotate } from "@/ui/word-rotate";

export default function WordRotateDemo() {
  return (
    <div class="overflow-hidden py-2">
      <WordRotate
        class="text-4xl font-bold text-black dark:text-white"
        words={["Word", "Rotate"]}
      />
    </div>
  );
}