import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShisaCreateEquation, ShisaUndo } from "@/components/icons/Shisa";
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
import React from "react";

export default function LabelVars({
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
  return (
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
            <label className="text-zinc-600 text-sm font-mono sm:text-base sm:w-16 sm:text-right">
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
                            <RadioGroupItem value="milligram" id="milligram" />
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
                      <AccordionItem value="item-2">
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
                            <RadioGroupItem value="kilometer" id="kilometer" />
                            <label htmlFor="kilometer" className="text-md">
                              Kilometer (km)
                            </label>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
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
                      <AccordionItem value="item-4">
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
  );
}
