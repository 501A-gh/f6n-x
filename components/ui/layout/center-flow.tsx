import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function CenterFlow({
  className,
  title,
  dscrp,
  children,
}: {
  className?: string;
  title: string;
  dscrp: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "flex flex-col gap-12 h-full mx-auto w-full max-w-144 pt-6 sm:pt-12 *:opacity-0 *:animate-blur-in",
        className
      )}
    >
      <hgroup className="sm:text-center animation-delay-75">
        <h1>{title}</h1>
        <p>{dscrp}</p>
      </hgroup>
      <div className="animation-delay-150">{children}</div>
    </section>
  );
}
