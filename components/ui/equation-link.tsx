import Link from "next/link";
import React from "react";
import LatexPreview from "./latex-preview";
import { truncate } from "@/app/lib/util/helper";
import { InferSelectModel } from "drizzle-orm";
import { equations } from "@/server/db/schema";

export default function EquationLink({
  data,
  type,
}: {
  data: InferSelectModel<typeof equations>;
  type: "grid" | "list";
}) {
  const { slug, latex, title, description } = data;

  if (type === "grid")
    return (
      <Link
        href={`/equations/${slug}`}
        className="border border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-sm rounded-2xl overflow-clip transition-transform active:translate-y-0.5"
      >
        <div className="px-6 py-3">
          <LatexPreview latex={latex} hideLatexCode />
        </div>
        <hr />
        <hgroup className="px-6 py-5 *:p-0 bg-zinc-200/40 dark:bg-zinc-900 flex flex-col gap-1 h-full">
          <h4 className="text-black dark:text-white font-medium">{title}</h4>
          <p className="text-base">{truncate(description, 40)}</p>
        </hgroup>
      </Link>
    );

  return (
    <Link
      href={`/equations/${slug}`}
      className="group flex gap-3 items-center px-4 py-2 bg-transparent border border-transparent hover:border-zinc-200 hover:dark:border-zinc-800 hover:bg-white hover:dark:bg-zinc-900 rounded-xl hover:shadow-sm active:shadow-none *:p-0"
    >
      <h4 className="group-hover:underline text-zinc-800 dark:text-zinc-200 underline-offset-2 decoration-zinc-400 dark:decoration-zinc-600 w-fit group-hover:text-black group-hover:dark:text-white">
        {title}
      </h4>
      <p className="no-underline">{truncate(description, 50)}</p>
    </Link>
  );
}
