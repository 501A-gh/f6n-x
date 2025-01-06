import {
  ShisaArrowRight,
  ShisaDocument,
  ShisaSearch,
} from "@/components/icons/Shisa";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import React from "react";

export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full">
      <header className="flex justify-between items-center py-4 top-0 sticky bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur z-50 px-6 border-b border-zinc-200 dark:border-zinc-800 h-16">
        <div className="flex items-center justify-between w-full wm-auto">
          <Link
            className="flex items-center gap-1.5 select-none text-black dark:text-white transition-transform active:scale-95"
            href="/"
          >
            <div className="text-2xl">
              <Logo />
            </div>
            <h1 className="font-medium m-0 p-0 text-xl">Hence</h1>
            <span className="bg-zinc-100 text-zinc-600 dark:text-zinc-400 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 border-b-2 text-xs rounded-md py-0.5 px-1 font-mono ml-1 uppercase">
              Beta
            </span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/browse"
              className="text-zinc-700 dark:text-zinc-300 flex gap-1.5 items-center text-sm transition-transform active:scale-95"
            >
              <ShisaSearch />
              Browse
            </Link>
            <Link
              href="/about"
              className="text-zinc-700 dark:text-zinc-300 flex gap-1.5 items-center text-sm transition-transform active:scale-95"
            >
              <ShisaDocument />
              About
            </Link>
            <Button size={"sm"}>
              <ShisaArrowRight />
              Sign In
            </Button>
          </nav>
        </div>
      </header>
      {children}
    </main>
  );
}
