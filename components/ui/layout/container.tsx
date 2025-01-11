import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Container({
  hide,
  title,
  dscrp,
  children,
}: {
  hide?: boolean;
  title: string;
  dscrp: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "grid gap-12 h-fit mx-auto w-full max-w-144 pt-6 sm:pt-12",
        hide ? "hidden" : "*:opacity-0 *:animate-blur-in"
      )}
    >
      <hgroup className="sm:text-center animation-delay-75">
        <h1>{title}</h1>
        <p>{dscrp}</p>
      </hgroup>
      <div className="animation-delay-100 grid bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl w-full h-fit text-black dark:text-white">
        {children}
      </div>
    </section>
  );
}
