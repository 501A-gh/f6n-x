import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Container({
  children,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl w-full h-fit text-black dark:text-white",
        props.className
      )}
    >
      {children}
    </div>
  );
}
