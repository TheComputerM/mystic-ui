import { createUniqueId, For, Show } from "solid-js";

import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  class?: string;
  [key: string]: unknown;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  class: className,
  ...props
}: GridPatternProps) {
  const id = createUniqueId();

  return (
    <svg
      aria-hidden="true"
      class={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            stroke-dasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke-width={0} fill={`url(#${id})`} />
      <Show when={squares}>
        <svg x={x} y={y} class="overflow-visible">
          <For each={squares}>
            {([x, y]) => (
              <rect
                stroke-width="0"
                width={width - 1}
                height={height - 1}
                x={x * width + 1}
                y={y * height + 1}
              />
            )}
          </For>
        </svg>
      </Show>
    </svg>
  );
}
