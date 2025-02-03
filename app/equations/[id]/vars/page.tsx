import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db } from "@/server/db";
import { equations, variables } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import LatexPreview from "@/components/ui/latex-preview";

export default async function VariablesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [equationData] = await db
    .select()
    .from(equations)
    .where(eq(equations.slug, (await params).id));

  const { latex } = equationData;
  const variablesData = await db
    .select()
    .from(variables)
    .where(eq(variables.id, equationData.id));

  return (
    <div className="grid gap-2">
      <details className="rounded-xl cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm text-black dark:text-white">
        <summary className="px-4 py-2.5 text-sm select-none">Equation</summary>
        <section>
          <hr />
          <div className="p-4">
            <LatexPreview latex={latex} />
          </div>
        </section>
      </details>
      <form className="grid gap-2 border border-zinc-200 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-950 rounded-2xl p-6">
        {variablesData.map((v, i) => (
          <fieldset
            key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <label className="text-zinc-600 text-sm font-serif italic sm:text-base sm:w-96 sm:text-right">
              {v.label}
            </label>
            <Input placeholder={v.placeholder} type="number" />
          </fieldset>
        ))}
        <div className="pt-12 grid grid-cols-2 gap-2">
          <Button type="reset" variant={"secondary"}>
            Clear
          </Button>
          <Button type="submit">Calculate</Button>
        </div>
      </form>
    </div>
  );
}
