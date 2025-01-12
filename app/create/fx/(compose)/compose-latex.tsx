import {
  ShisaCreateEquation,
  ShisaHence,
  ShisaUndo,
} from "@/components/icons/Shisa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

import React, { useActionState } from "react";
import { composeLatex } from "./action";
import LatexPreview from "@/app/calculate/[id]/latex-preview";

export default function ComposeLatex({
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
  const [composeState, composeAction, isPending] = useActionState<
    {
      latex: string;
      variables: string[];
    },
    FormData
  >(composeLatex, {
    ...latexInput,
  });

  console.log(composeState);

  return (
    // <form action={composeAction}>
    //   <hgroup className="sm:text-center animation-delay-75 pt-6 px-6">
    //     <h3 className="text-black dark:text-white">Extracted Variables</h3>
    //     <p>The following variables were extracted from your LaTeX equation</p>
    //   </hgroup>
    //   <section className="flex items-center justify-center gap-2 p-6">
    //     {latexInput.variables.map((variable) => (
    //       <div
    //         key={variable}
    //         className="font-mono bg-zinc-50 dark:bg-zinc-800 h-8 px-3 flex items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-600 shadow-md"
    //       >
    //         {variable}
    //       </div>
    //     ))}
    //   </section>
    //   <hr />
    //   <input type="hidden" name="latex" value={latexInput.latex} />
    //   <div className="grid gap-6 p-6">
    //     <Button type="submit" className="w-full" disabled={isPending}>
    //       {isPending ? (
    //         <>
    //           <ShisaHence className="animate-spin" />
    //           Creating Equation
    //         </>
    //       ) : (
    //         <>
    //           <ShisaCreateEquation />
    //           Compose & Continue Labeling
    //         </>
    //       )}
    //     </Button>
    //   </div>
    // </form>
    <div>
      <div className="flex items-center gap-2 p-4 sm:p-6">
        <Button
          variant={"secondary"}
          size={"sm"}
          onClick={() => {
            setLatexInput({
              ...latexInput,
              variables: [],
            });
          }}
        >
          <ShisaUndo />
          Edit Equation
        </Button>
      </div>
      <LatexPreview latex={composeState.latex} hideLatexCode />
      <form className="grid" action={composeAction}>
        <input type="hidden" name="latex" value={composeState.latex} />
        <section className="grid gap-2.5 p-4 sm:p-6">
          {latexInput.variables.map((variable, i) => (
            <fieldset
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <label className="text-zinc-600 dark:text-zinc-300 text-sm font-mono sm:text-base sm:w-16 sm:text-right">
                {variable}
              </label>
              <div className="flex-1 flex items-center gap-1.5">
                <div className="flex items-center w-full *:bg-zinc-50 *:dark:bg-zinc-950">
                  <Input
                    placeholder={`Label`}
                    className="rounded-r-none rounded-l-lg"
                    name={`input-${i}-label`}
                  />
                  <Input
                    placeholder={`Placeholder`}
                    className="rounded-l-none rounded-r-lg border-l-0"
                    name={`input-${i}-placeholder`}
                  />
                </div>
                <Popover>
                  <PopoverTrigger className="h-10 px-3.5 py-1 flex items-center justify-center gap-1 border border-zinc-200 dark:border-zinc-800 bg-white hover:bg-zinc-50 dark:bg-zinc-950 hover:dark:bg-zinc-900 rounded-lg text-sm">
                    Unit
                  </PopoverTrigger>
                  <PopoverContent sideOffset={6} align="end">
                    <RadioGroup name={`input-${i}-unit`} defaultValue="">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="others"
                      >
                        <AccordionItem value="mass">
                          <AccordionTrigger>Mass</AccordionTrigger>
                          <AccordionContent
                            className={`grid gap-0 *:flex *:items-center *:gap-2 *:p-2`}
                          >
                            <div>
                              <RadioGroupItem
                                value="milligram"
                                id="milligram"
                              />
                              <label htmlFor="milligram" className="text-md">
                                Milligram (mg)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem value="gram" id="gram" />
                              <label htmlFor="gram" className="text-md">
                                Gram (g)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem value="kilogram" id="kilogram" />
                              <label htmlFor="kilogram" className="text-md">
                                Kilogram (kg)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem value="tonne" id="tonne" />
                              <label htmlFor="tonne" className="text-md">
                                Tonne (t)
                              </label>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="length">
                          <AccordionTrigger>Length</AccordionTrigger>
                          <AccordionContent
                            className={`grid gap-0 *:flex *:items-center *:gap-2 *:p-2`}
                          >
                            <div>
                              <RadioGroupItem
                                value="millimeter"
                                id="millimeter"
                              />
                              <label htmlFor="millimeter" className="text-md">
                                Millimeter (mm)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem
                                value="centimeter"
                                id="centimeter"
                              />
                              <label htmlFor="centimeter" className="text-md">
                                Centimeter (cm)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem value="meter" id="meter" />
                              <label htmlFor="meter" className="text-md">
                                Meter (m)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem
                                value="kilometer"
                                id="kilometer"
                              />
                              <label htmlFor="kilometer" className="text-md">
                                Kilometer (km)
                              </label>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="volume">
                          <AccordionTrigger>Volume</AccordionTrigger>
                          <AccordionContent
                            className={`grid gap-0 *:flex *:items-center *:gap-2 *:p-2`}
                          >
                            <div>
                              <RadioGroupItem
                                value="milliliter"
                                id="milliliter"
                              />
                              <label htmlFor="milliliter" className="text-md">
                                Milliliter (mL)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem value="liter" id="liter" />
                              <label htmlFor="liter" className="text-md">
                                Liter (L)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem
                                value="cubic-meter"
                                id="cubic-meter"
                              />
                              <label htmlFor="cubic-meter" className="text-md">
                                Cubic Meter (m³)
                              </label>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="others">
                          <AccordionTrigger>Others</AccordionTrigger>
                          <AccordionContent
                            className={`grid gap-0 *:flex *:items-center *:gap-2 *:p-2`}
                          >
                            <div>
                              <RadioGroupItem value="percent" id="percent" />
                              <label htmlFor="percent" className="text-md flex">
                                Percentage (%)
                              </label>
                            </div>
                            <div>
                              <RadioGroupItem value="" id="none" />
                              <label htmlFor="none" className="text-md flex">
                                None
                              </label>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </RadioGroup>
                  </PopoverContent>
                </Popover>
              </div>
            </fieldset>
          ))}
          <input
            type="hidden"
            name="var-count"
            value={latexInput.variables.length}
          />
        </section>
        <hr />
        <div className="p-4 sm:p-6 *:w-full">
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <ShisaHence className="animate-spin" />
                Creating ...
              </>
            ) : (
              <>
                <ShisaCreateEquation />
                Create Equation
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
