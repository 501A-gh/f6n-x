"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import katex from "katex";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export default function ComposeSteps() {
  const [latexInput, setLatexInput] = useState<{
    latex: string;
    latexError: boolean;
    variables: string[];
  }>({
    latex: "",
    latexError: false,
    variables: [],
  });

  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current) {
      try {
        setLatexInput({
          ...latexInput,
          latexError: false,
        });
        katex.render(latexInput.latex, previewRef.current, {
          throwOnError: true,
          displayMode: true,
        });
      } catch (error) {
        if (latexInput.latex !== "") {
          setLatexInput({
            ...latexInput,
            latexError: true,
          });
        }
        previewRef.current.textContent = `Error rendering LaTeX`;
      }
    }
  }, [latexInput.latex]);

  return (
    <div>
      <section
        className={cn(
          "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl overflow-clip transition-all",
          latexInput.variables.length > 0 ? "p-1" : "p-0"
        )}
      >
        <div
          className={cn(
            "rounded-xl flex flex-col p-3 bg-zinc-100 dark:bg-zinc-900"
          )}
        >
          <div
            className={cn(
              "overflow-x-auto min-h-28 flex-1 rounded-t-md flex items-center justify-center",
              latexInput.latexError
                ? "text-rose-600 dark:text-rose-500"
                : "text-black dark:text-white"
            )}
          >
            {latexInput.latex ? (
              <div className="h-fit" ref={previewRef} />
            ) : (
              <div className="text-zinc-500 dark:text-zinc-700 animate-pulse">
                Empty
              </div>
            )}
          </div>

          {latexInput.variables.length <= 0 && (
            <form
              className="flex items-center justify-between gap-1 border border-zinc-200 dark:border-zinc-800 rounded-full p-2 w-full h-fit text-black dark:text-white bg-white dark:bg-zinc-950 shadow-sm placeholder:text-zinc-500"
              onSubmit={async (e) => {
                e.preventDefault();
                const response = await fetch(
                  `http://localhost:8000/extract-vars?exclude_constants=true`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ latex: String(latexInput.latex) }),
                  }
                );

                if (!response.status)
                  throw new Error("Failed to extract variables");
                setLatexInput({
                  ...latexInput,
                  variables: await response
                    .json()
                    .then((data) => data.variables),
                });
              }}
            >
              <input
                // name="latex-input"
                type="text"
                className="w-full h-8 text-sm rounded-full px-3 font-mono bg-transparent"
                value={latexInput.latex}
                onChange={(e) => {
                  setLatexInput({
                    ...latexInput,
                    latex: e.target.value,
                  });
                }}
                placeholder="Type LaTeX here"
              />
              <Button
                size={"sm"}
                variant={"secondary"}
                disabled={!latexInput.latex}
                onClick={() => {
                  setLatexInput({
                    ...latexInput,
                    latex: "",
                  });
                }}
                type="button"
              >
                Clear
              </Button>
              <Button
                size={"sm"}
                disabled={latexInput.latexError || !latexInput.latex}
                type="submit"
              >
                Extract Variables
              </Button>
            </form>
          )}
        </div>
      </section>
      {latexInput.variables.length > 0 && (
        <>
          <div className="z-0 flex flex-row justify-center gap-1.5 h-10 *:w-[1px] *:h-full *:bg-zinc-300 *:dark:bg-zinc-700 opacity-0 animate-blur-in">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <section className="bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-clip animation-delay-75 opacity-0 animate-blur-in">
            <section className="p-3 sm:p-5">
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3 sm:p-4">
                <p className="text-sm p-0 dark:text-zinc-500">
                  These labels will help you remember what each variable stands
                  for in your equation, however are not mandatory to populate.
                </p>
              </div>
            </section>
            <form
              className="grid gap-6 sm:gap-9 p-6 sm:p-9 pt-0"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <section className="grid gap-2">
                {latexInput.variables.map((variable, i) => (
                  <fieldset
                    className="flex flex-col sm:flex-row sm:items-center gap-3"
                    key={i}
                  >
                    <label className="text-zinc-600 text-sm font-serif italic sm:text-base sm:w-20 sm:text-right">
                      {variable}
                    </label>
                    <Input placeholder="Variable Label" className="flex-1" />
                  </fieldset>
                ))}
              </section>
              <fieldset className="grid gap-2 grid-cols-2">
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    setLatexInput({
                      ...latexInput,
                      variables: [],
                    });
                  }}
                >
                  Undo Extraction
                </Button>
                <Button>Create Equation</Button>
              </fieldset>
            </form>
          </section>
        </>
      )}
    </div>
  );
}
