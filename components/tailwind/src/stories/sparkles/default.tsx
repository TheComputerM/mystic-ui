import { SparklesCore } from "@/ui/sparkles";

export default function SparklesDemo() {
  return (
    <div class="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div class="w-full h-full absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          class="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 class="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
    </div>
  );
}
