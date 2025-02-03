import { equations } from "@/server/db/schema";
import { db } from "@/server/db";
import React from "react";
import EquationLink from "@/components/ui/equation-link";

export default async function BrowsePage() {
  const result = await db.select().from(equations).all();
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
        <div className="grid sm:grid-cols-2 gap-3">
          {result.map((row, i) => (
            <EquationLink key={i} data={row} type="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}
