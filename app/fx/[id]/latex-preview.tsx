"use client";
import { Button } from "@/components/ui/button";
import React, { useActionState, useEffect, useRef, useState } from "react";

import katex from "katex";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Loader, RefreshCw } from "lucide-react";

export default function LatexPreview({ latex }: { latex: string }) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [inputError, setInputError] = useState<boolean>(false);
  const [input, setInput] = useState<{
    latex: string;
    excludeConstants: boolean;
  }>({
    latex: latex,
    excludeConstants: true,
  });

  useEffect(() => {
    if (previewRef.current) {
      try {
        katex.render(input.latex, previewRef.current, {
          throwOnError: true,
          displayMode: true,
        });
        setInputError(false);
      } catch (error) {
        setInputError(true);
        console.log(error);
        previewRef.current.textContent = `Error rendering LaTeX`;
      }
    }
  }, [input.latex]);

  const [state, formAction, isPending] = useActionState<{
    latex: string;
    variables: string[];
    message: string | null;
  }>(
    async () => {
      const response = await fetch(
        `http://localhost:8000/extract-vars?exclude_constants=${input.excludeConstants}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ latex: String(input.latex) }),
        }
      );

      if (!response.status) throw new Error("Failed to extract variables");
      return response.json();
    },
    {
      latex: "",
      variables: [],
      message: null,
    }
  );

  console.log(inputError);

  return (
    <>
      <div className="pl-6 py-6">
        <div
          className={cn(
            "border border-zinc-200 dark:border-zinc-800 text-black dark:text-white overflow-x-auto h-28 flex-1 rounded-t-sm shadow-inner flex items-center justify-center bg-zinc-100 dark:bg-zinc-950"
          )}
        >
          <div className="h-fit" ref={previewRef} />
        </div>
        <input
          value={input.latex}
          onChange={(e) =>
            setInput({
              ...input,
              latex: e.target.value,
            })
          }
          placeholder="Type LaTeX here"
          className="font-mono w-full h-10 px-2 py-1 text-center text-sm border border-t-0 border-zinc-200 dark:border-zinc-800 rounded-b-md text-black dark:text-white bg-white dark:bg-zinc-950 shadow-md placeholder:text-zinc-500"
        />
      </div>
      <form className="grid gap-6 pl-6 py-6" action={formAction}>
        <div className="grid gap-3">
          <fieldset className="flex items-center gap-2 px-6">
            <Checkbox
              checked={input.excludeConstants}
              onCheckedChange={() =>
                setInput({
                  ...input,
                  excludeConstants: !input.excludeConstants,
                })
              }
            />
            <label className="text-black dark:text-white text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Exclude constants
            </label>
          </fieldset>
          <fieldset className="flex items-center gap-2 px-6">
            <Checkbox />
            <label className="text-black dark:text-white text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Ignore specified variables
            </label>
          </fieldset>
        </div>
        <Button
          type="submit"
          variant={"secondary"}
          disabled={!input.latex || inputError}
        >
          {isPending ? <Loader className="animate-spin" /> : <ArrowRight />}
          {isPending ? "Extracting..." : "Extract Variables"}
        </Button>
      </form>
    </>
  );
}
