"use client";
import React, { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShisaHence } from "@/components/icons/Shisa";
import { calculateLatex, CalculatexLatexReturnType } from "./action";
import { Input } from "@/components/ui/input";
import { variables } from "@/server/db/schema";
import { InferSelectModel } from "drizzle-orm";
import Container from "@/components/ui/layout/container";

export default function Calculate({
  latex,
  variablesData,
}: {
  latex: string;
  variablesData: InferSelectModel<typeof variables>[];
}) {
  const [calculateState, calculateAction, isPending] = useActionState<
    CalculatexLatexReturnType,
    FormData
  >(calculateLatex, {
    answer: {
      status: "empty",
    },
  });

  useEffect(() => {
    if (calculateState.answer.status === "failed") {
      alert("failed");
    }
  }, [calculateState]);

  return (
    <form action={calculateAction}>
      <Container>
        <div className="grid gap-2 p-6">
          <input type="hidden" name="latex" value={latex} />
          {variablesData.map((v, i) => (
            <fieldset
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <label className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm sm:w-96 sm:text-right">
                {v.label}
              </label>
              <input type="hidden" value={v.latex} name={`input-${i}-key`} />
              <div className="flex w-full items-center">
                <label className="bg-zinc-50 dark:bg-zinc-800 rounded-l-xl border-l border-y border-zinc-200 dark:border-zinc-800 text-black dark:text-white px-4 py-1 h-10 min-w-10 w-fit flex items-center justify-center font-mono text-xs">
                  <span>{v.latex}</span>
                </label>
                <Input
                  placeholder={v.placeholder}
                  type="number"
                  className="rounded-l-none rounded-r-xl dark:bg-zinc-950/50"
                  name={`input-${i}-value`}
                  step="any"
                />
              </div>
            </fieldset>
          ))}
        </div>
        <input type="hidden" name="var-count" value={variablesData.length} />
        <div className="grid grid-cols-2 gap-2 px-6 pb-6">
          <Button type="reset" variant={"secondary"}>
            Clear
          </Button>
          <Button type="submit">
            <ShisaHence className={cn(isPending && "animate-spin")} />
            {isPending ? "Crunching numbers..." : "Calculate"}
          </Button>
        </div>
        {calculateState.answer.status == "success" && (
          <section className="p-3 opacity-0 animate-blur-in">
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg py-3 px-6 shadow-sm">
              <h3 className="text-black dark:text-white">
                <span>
                  <b>Result: </b>
                </span>
                <span className="bg-transparent hover:bg-zinc-100 hover:dark:bg-zinc-800 border border-transparent hover:border-zinc-200 hover:dark:border-zinc-700 rounded-sm px-1 py-0.5 text-black dark:text-white select-text cursor-copy transition-transform active:scale-95">
                  {parseFloat(calculateState.answer.result).toFixed(1)}
                </span>
              </h3>
              <p>
                <span>
                  <b>Exact Result: </b>
                </span>
                <span>{calculateState.answer.result}</span>
              </p>
              {calculateState.answer.steps.length > 1 && (
                <>
                  <hr />
                  <ul>
                    {calculateState.answer.steps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>
        )}
      </Container>
    </form>
  );
}
