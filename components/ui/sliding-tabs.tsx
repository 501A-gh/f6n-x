"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const borderRadius = "20rem";

type Tab = {
  icon?: React.ReactNode;
  title: string;
  path: string;
};

type SlidingTabsProps = {
  basePath: string;
  tabs: Tab[];
  orientation?: "horizontal" | "vertical";
};

const SlidingTabs = ({
  basePath,
  tabs,
  orientation = "horizontal",
}: SlidingTabsProps) => {
  const currentPath = usePathname();

  // Derive the active index based on the current URL
  const activeIndex = tabs.findIndex(
    (tab) => currentPath.replace(basePath, "") === `/${tab.path}`
  );

  // Fallback to the first tab if none match
  const effectiveActiveIndex = activeIndex === -1 ? 0 : activeIndex;
  const numTabs = tabs.length;

  // Compute clipPath based on orientation and active tab
  const inset = (effectiveActiveIndex * 100) / numTabs;
  const oppositeInset = 100 - ((effectiveActiveIndex + 1) * 100) / numTabs;
  const clipPath =
    orientation === "horizontal"
      ? `inset(0 ${oppositeInset}% 0 ${inset}% round ${borderRadius})`
      : `inset(${inset}% 0 ${oppositeInset}% 0 round ${borderRadius})`;

  return (
    <div
      className={cn(
        "relative transition-all duration-300 text-sm font-medium",
        orientation === "horizontal" ? "w-full max-w-md" : "h-full w-full"
      )}
    >
      {/* Inactive Tabs (Base Layer) */}
      <div
        className={cn(
          "transition-all duration-300",
          orientation === "horizontal"
            ? "flex items-center"
            : "flex flex-col w-full"
        )}
      >
        {tabs.map(({ icon, title, path }, index) => (
          <Link
            key={index}
            href={`${basePath}/${path}`}
            className={cn(
              "transition-colors text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300",
              orientation === "horizontal"
                ? "rounded-lg flex-1 text-center"
                : "w-full"
            )}
          >
            <div
              className={cn(
                "transition-transform active:scale-95 flex items-center w-full h-full py-2",
                orientation === "horizontal"
                  ? "gap-2 justify-center px-3"
                  : "gap-2.5 justify-start px-4 active:-translate-x-1"
              )}
            >
              {icon}
              {title}
            </div>
            {/* Optional border/separator for horizontal layout */}
            {orientation === "horizontal" && (
              <div
                className={cn(
                  "transition-all duration-300",
                  effectiveActiveIndex === index ||
                    index === 0 ||
                    index === effectiveActiveIndex + 1
                    ? "opacity-0"
                    : "absolute top-2 block h-4 w-[1.5px] bg-zinc-200 dark:bg-zinc-800 rounded-full"
                )}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Active Tab Overlay (using clip-path) */}
      <div
        className={cn(
          "absolute transition-all duration-300 top-0 left-0 bg-zinc-200/60 dark:bg-zinc-800/70 w-full h-full",
          orientation === "horizontal" ? "flex" : "flex-col"
        )}
        style={{ clipPath }}
      >
        {tabs.map(({ icon, title }, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center transition-all py-2 rounded-lg",
              index === effectiveActiveIndex
                ? "text-black dark:text-white"
                : "text-transparent",
              orientation === "horizontal"
                ? "gap-2 flex-1 justify-center px-3"
                : "gap-2.5 justify-start px-4"
            )}
          >
            {icon}
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingTabs;
