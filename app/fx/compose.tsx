"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import katex from "katex";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ShisaCreateEquation,
  ShisaExtractVariables,
  ShisaPercent,
  ShisaUndo,
} from "@/components/icons/Shisa";
import { Checkbox } from "@/components/ui/checkbox";
import Container from "@/components/ui/layout/container";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Compose() {
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
        setLatexInput({ ...latexInput, latexError: false });
        katex.render(latexInput.latex, previewRef.current, {
          throwOnError: true,
          displayMode: true,
        });
      } catch (e) {
        console.log(e);
        if (latexInput.latex !== "")
          setLatexInput({ ...latexInput, latexError: true });
        previewRef.current.textContent = `Error rendering LaTeX`;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latexInput.latex]);

  return (
    <>
      <Container
        title="Create Equation"
        dscrp="Start by typing your LaTeX equation in the input field."
        hide={latexInput.variables.length ? true : false}
      >
        <form
          className="placeholder:text-zinc-500 animate-from:opacity-0 animate-to:opacity-1"
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
              variables: await response.json().then((data) => data.variables),
            });
          }}
        >
          <input
            type="text"
            name="latex-input"
            className="w-full h-8 text-sm rounded-full font-mono bg-transparent focus:ring-0 focus:outline-none py-7 px-5"
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
                LaTeX Preview
              </div>
            )}
          </div>
          <hr />
          <div className="grid gap-6 p-6">
            <div className="grid gap-3">
              <fieldset className="flex items-center gap-2 px-2">
                <Checkbox
                // checked={input.excludeConstants}
                // onCheckedChange={() =>
                //   setInput({
                //     ...input,
                //     excludeConstants: !input.excludeConstants,
                //   })
                // }
                />
                <label className="text-black dark:text-white text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Exclude constants
                </label>
              </fieldset>
              <fieldset className="flex items-center gap-2 px-2">
                <Checkbox
                // checked={input.excludeConstants}
                // onCheckedChange={() =>
                //   setInput({
                //     ...input,
                //     excludeConstants: !input.excludeConstants,
                //   })
                // }
                />
                <label className="text-black dark:text-white text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Exclude constants
                </label>
              </fieldset>
            </div>
            <Button
              type="submit"
              disabled={latexInput.latexError || !latexInput.latex}
            >
              <ShisaExtractVariables />
              Extract Variables
            </Button>
            {/* <fieldset className="flex items-center gap-2 px-6">
                  <Checkbox />
                  <label className="text-black dark:text-white text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Ignore specified variables
                  </label>
                </fieldset> */}
          </div>
          {/* <Button
                type="button"
                title="Create Equation"
                size={"icon"}
                disabled
              >
                <ShisaCreateEquation />
              </Button> */}
        </form>
      </Container>
      <Container
        title="Label Variables"
        dscrp="Labeling will help you remember what each variable stands for."
        hide={!latexInput.variables.length}
      >
        <form
          className="grid gap-12 p-4 sm:p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <section className="grid gap-2.5">
            {latexInput.variables.map((variable, i) => (
              <fieldset
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <label className="text-zinc-600 text-sm font-serif italic sm:text-base sm:w-16 sm:text-right">
                  {variable}
                </label>
                <div className="flex-1 flex items-center gap-1.5">
                  <div className="flex items-center w-full *:bg-zinc-50 *:dark:bg-zinc-950">
                    <Input
                      placeholder={`Label`}
                      className="rounded-r-none rounded-l-lg"
                    />
                    <Input
                      placeholder={`Placeholder`}
                      className="rounded-l-none rounded-r-lg border-l-0"
                    />
                  </div>
                  <Popover>
                    <PopoverTrigger className="h-10 px-3.5 py-1 flex items-center justify-center gap-1 border border-zinc-200 dark:border-zinc-800 bg-white hover:bg-zinc-50 dark:bg-zinc-950 hover:dark:bg-zinc-900 rounded-lg text-sm">
                      Unit
                    </PopoverTrigger>
                    <PopoverContent sideOffset={6} align="end">
                      <RadioGroup
                        name="scope"
                        // defaultValue={scopeInput}
                      >
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Mass</AccordionTrigger>
                            <AccordionContent
                              className={`grid gap-0 *:flex *:items-center *:gap-2 *:p-2`}
                            >
                              <div>
                                <RadioGroupItem
                                  value="private"
                                  id="private"
                                  // onClick={() => setScopeInput("private")}
                                />
                                <label htmlFor="private" className="text-md">
                                  Gram (g)
                                </label>
                              </div>
                              <div>
                                <RadioGroupItem
                                  value="private"
                                  id="private"
                                  // onClick={() => setScopeInput("private")}
                                />
                                <label htmlFor="private" className="text-md">
                                  Kilogram (kg)
                                </label>
                              </div>
                              <div>
                                <RadioGroupItem
                                  value="percent"
                                  id="percent"
                                  // onClick={() => setScopeInput("public")}
                                />
                                <label
                                  htmlFor="percent"
                                  className="text-md flex"
                                >
                                  Percentage (%)
                                </label>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>Length</AccordionTrigger>
                            <AccordionContent
                              className={`grid gap-0 *:flex *:items-center *:gap-2 *:p-2`}
                            >
                              <label className="text-md">Metric</label>
                              <div>
                                <RadioGroupItem
                                  value="test"
                                  id="test"
                                  // onClick={() => setScopeInput("public")}
                                />
                                <label htmlFor="test" className="text-md">
                                  Centimeter (cm)
                                </label>
                              </div>
                              <div>
                                <RadioGroupItem
                                  value="test"
                                  id="test"
                                  // onClick={() => setScopeInput("public")}
                                />
                                <label htmlFor="test" className="text-md">
                                  Millimeter (mm)
                                </label>
                              </div>
                              <div>
                                <RadioGroupItem
                                  value="test"
                                  id="test"
                                  // onClick={() => setScopeInput("public")}
                                />
                                <label htmlFor="test" className="text-md">
                                  Meter (m)
                                </label>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>Volume</AccordionTrigger>
                            <AccordionContent>
                              Yes. Animated by default, but you can disable it
                              if you prefer.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger>Others</AccordionTrigger>
                            <AccordionContent>
                              Yes. Animated by default, but you can disable it
                              if you prefer.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </RadioGroup>
                    </PopoverContent>
                  </Popover>
                </div>
              </fieldset>
            ))}
          </section>
          <fieldset className="grid gap-3 sm:gap-2 sm:grid-cols-2">
            <Button
              variant={"secondary"}
              onClick={() => {
                setLatexInput({
                  ...latexInput,
                  variables: [],
                });
              }}
            >
              <ShisaUndo />
              Undo Extraction
            </Button>
            <Button>
              <ShisaCreateEquation />
              Create Equation
            </Button>
          </fieldset>
        </form>
      </Container>
    </>
  );
}
