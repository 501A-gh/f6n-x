"use client";
import React, { useEffect, useRef } from "react";

import katex from "katex";
import "katex/dist/katex.min.css";
import { ShisaCopy } from "@/components/icons/Shisa";

export default function LatexPreview({
  latex,
  hideLatexCode = false,
}: {
  latex: string;
  hideLatexCode?: boolean;
}) {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current) {
      try {
        katex.render(latex, previewRef.current, {
          throwOnError: true,
          displayMode: true,
        });
      } catch (error) {
        console.log(error);
        previewRef.current.textContent = `Error rendering LaTeX`;
      }
    }
  }, [latex]);

  return (
    <section>
      <div className="text-black dark:text-white overflow-x-auto h-24 flex items-center justify-center">
        <div className="h-fit" ref={previewRef} />
      </div>
      {!hideLatexCode && (
        <div
          className="flex items-center justify-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full mx-auto w-fit h-fit px-2 py-1 text-zinc-500 dark:text-zinc-400 text-sm active:scale-95 transition-transform cursor-copy"
          onClick={() => navigator.clipboard.writeText(latex)}
        >
          <ShisaCopy />
          <code>{latex}</code>
        </div>
      )}
    </section>
  );
}
