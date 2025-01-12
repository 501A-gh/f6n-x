import { equations } from "@/db/schema";
import { db } from "@/db";
import React from "react";
import LatexPreview from "../../calculate/[id]/latex-preview";
import Link from "next/link";

export default async function BrowsePage() {
  const result = await db.select().from(equations).all();
  console.log(result);
  return (
    <section className="px-6">
      <div className="wm-auto flex flex-col gap-3">
        <hgroup className="flex flex-col items-center gap-3 py-12">
          <h1>Browse Calculators</h1>
          <p>
            Look through the list of calculators that have been created by the
            community.
          </p>
        </hgroup>
        <div className="grid grid-cols-2 gap-3">
          {result.map((row, i) => (
            <Link
              href={`/calculate/${row.id}`}
              key={i}
              className="border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl overflow-clip transition-transform active:scale-95"
            >
              <div className="p-6">
                <LatexPreview latex={row.latex} />
              </div>
              <hr />
              <hgroup className="p-6 *:p-0 bg-zinc-100 dark:bg-zinc-900">
                <h3>{row.title}</h3>
                <p>{row.description}</p>
              </hgroup>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
