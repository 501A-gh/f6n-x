"use client";
import { ShisaExtractVariables, ShisaHence } from "@/components/icons/Shisa";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import React, { useActionState, useEffect, useRef, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { Button } from "@/components/ui/button";
import { extractVars } from "./action";

export default function ExtractVars({
  latexInput,
  setLatexInput,
}: {
  latexInput: {
    latex: string;
    variables: string[];
  };
  setLatexInput: React.Dispatch<
    React.SetStateAction<{
      latex: string;
      variables: string[];
    }>
  >;
}) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [latexError, setLatexError] = useState(false);

  useEffect(() => {
    if (previewRef.current) {
      try {
        setLatexInput({ ...latexInput });
        setLatexError(false);
        katex.render(latexInput.latex, previewRef.current, {
          throwOnError: true,
          displayMode: true,
        });
      } catch (e) {
        console.log(e);
        if (latexInput.latex !== "") {
          setLatexInput({ ...latexInput });
          setLatexError(true);
        }
        previewRef.current.textContent = `Error rendering LaTeX`;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latexInput.latex]);

  const [extractState, extractAction, isPending] = useActionState<
    {
      extract: {
        latex: string;
        exclude_constants: boolean;
      };
      variables: string[];
    },
    FormData
  >(extractVars, {
    extract: {
      latex: "",
      exclude_constants: true,
    },
    variables: [],
  });

  useEffect(() => {
    setLatexInput({
      ...latexInput,
      variables: extractState.variables,
    });
  }, [extractState]);

  return (
    <form
      className="placeholder:text-zinc-500 animate-from:opacity-0 animate-to:opacity-1"
      action={extractAction}
    >
      <input
        type="text"
        name="latex-input"
        className="w-full h-8 text-sm font-mono bg-transparent focus:ring-0 focus:outline-none py-7 px-5 rounded-t-2xl"
        value={latexInput.latex}
        onChange={(e) => {
          setLatexInput({
            ...latexInput,
            latex: e.target.value,
          });
        }}
        placeholder="Type LaTeX here..."
      />
      <hr />
      <div
        className={cn(
          "overflow-x-auto min-h-28 flex-1 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950",
          latexError
            ? "text-rose-600 dark:text-rose-500"
            : "text-black dark:text-white"
        )}
      >
        {latexInput.latex ? (
          <div className="h-fit" ref={previewRef} />
        ) : (
          <div className="text-zinc-500 dark:text-zinc-700 animate-pulse">
            LaTeX Preview
          </div>
        )}
      </div>
      <hr />
      <div className="grid gap-6 p-6">
        <div className="grid gap-3">
          <fieldset className="flex items-center gap-2 px-2">
            <Checkbox
              name="exclude-constants"
              defaultChecked={extractState.extract.exclude_constants}
            />
            <label className="text-black dark:text-white text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Exclude predefined constants (π, e and i)
            </label>
          </fieldset>
        </div>
        <Button
          type="submit"
          variant="secondary"
          disabled={latexError || !latexInput.latex || isPending}
        >
          {isPending ? (
            <>
              <ShisaHence className="animate-spin" />
              Extracting ...
            </>
          ) : (
            <>
              <ShisaExtractVariables />
              Extract Variables
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
