import {
  ConnectorHorizontal,
  ConnectorVertical,
} from "@/components/ui/connector";
import { Input } from "@/components/ui/input";
import React from "react";
import LatexPreview from "../../components/ui/latex-preview";
import { Button } from "@/components/ui/button";

export default function LandingVisual() {
  return (
    <div className="lg:h-96 flex flex-col lg:flex-row items-center justify-center bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/70 shadow-sm rounded-2xl overflow-clip p-6">
      <div className="border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl overflow-clip w-56">
        <hgroup className="bg-white dark:bg-zinc-900 p-4">
          <h4 className="text-black dark:text-white font-medium">
            Temperature Conversion
          </h4>
          <p>From °C to °F.</p>
        </hgroup>
        <hr />
        <div className="flex items-center justify-center gap-2 p-4">
          <label
            htmlFor="celsius"
            className="italic font-serif text-black dark:text-white"
          >
            Celsius
          </label>
          <Input
            type="number"
            id="celsius"
            className="w-full font-mono pointer-events-none"
            value="0"
            readOnly
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <ConnectorHorizontal />
      </div>
      <div className="block lg:hidden">
        <ConnectorVertical />
      </div>
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl p-4 w-72">
        <div className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white shadow-md rounded-lg w-32 h-fit px-2 py-1 text-sm absolute transform translate-x-1/2 -translate-y-7">
          LaTeX Equation
        </div>
        <div className="pb-4 pt-6">
          <LatexPreview latex="T_C\times\frac{9}{5}+32" />
        </div>
        <Button
          type="button"
          variant={"secondary"}
          size={"sm"}
          className="mt-6 w-full"
        >
          Calculate
        </Button>
      </div>
      <div className="hidden lg:block">
        <ConnectorHorizontal />
      </div>
      <div className="block lg:hidden">
        <ConnectorVertical />
      </div>
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl p-4 w-56">
        <h1 className="text-center">
          40
          <span className="italic font-serif text-sm"> Fahrenheit</span>
        </h1>
      </div>
    </div>
  );
}
