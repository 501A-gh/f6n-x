import { ShisaCreateEquation } from "@/components/icons/Shisa";
import CenterFlow from "@/components/ui/layout/center-flow";
import Link from "next/link";
import React from "react";

export default function CreatePage() {
  return (
    <CenterFlow title="Create" dscrp="What would you like to create?">
      <div className="grid gap-2 sm:grid-cols-2">
        <Link
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/70 rounded-2xl py-4 px-6 text-white text-left w-full hover:bg-zinc-100 dark:hover:bg-zinc-950 shadow-sm"
          href={"/create/equation"}
        >
          <b className="flex gap-2 items-center text-black dark:text-white text-base">
            <ShisaCreateEquation />
            <span>New Calculator</span>
          </b>
          <p>Create a calculator to solve your specific needs.</p>
        </Link>
        <Link
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/70 rounded-2xl py-4 px-6 text-white text-left w-full hover:bg-zinc-100 dark:hover:bg-zinc-950 shadow-sm"
          href={"/create/equation"}
        >
          <b className="flex gap-2 items-center text-black dark:text-white text-base">
            <ShisaCreateEquation />
            <span>New Math Note</span>
          </b>
          <p>Store your equations and share with others.</p>
        </Link>
      </div>
    </CenterFlow>
  );
}
