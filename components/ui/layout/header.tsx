import {
  ShisaArrowRight,
  ShisaDocument,
  ShisaPlus,
  ShisaSearch,
} from "@/components/icons/Shisa";
import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { auth } from "@/server/auth";
import Image from "next/image";
import { Button } from "../button";
import { cn } from "@/lib/utils";

export default async function Header() {
  const session = await auth();

  return (
    <header
      className={cn(
        "flex justify-between bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur z-50 px-6",
        session
          ? "items-end h-12 pb-1.5"
          : "items-center sticky top-0 border-b border-zinc-200 dark:border-zinc-800/70 h-14"
      )}
    >
      <div className="flex items-center justify-between w-full wm-auto">
        <nav className="flex gap-1.5 items-center">
          {session ? (
            <Link
              href="/settings"
              className="flex gap-2 items-center rounded-xl"
              // p-1 bg-transparent hover:bg-zinc-200 hover:dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800
            >
              <Image
                src={String(session.user.image)}
                alt={`${session.user.name} Profile Picture`}
                width={23}
                height={23}
                className="rounded-full border border-zinc-200 dark:border-zinc-800"
              />
              <span className="text-black dark:text-white font-medium text-md underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-600 pr-2">
                {session.user.name}
              </span>
            </Link>
          ) : (
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
          )}
        </nav>

        <nav className="flex gap-6">
          <Link
            href="/browse"
            className="text-zinc-700 dark:text-zinc-300 flex gap-1.5 items-center text-sm transition-transform active:scale-95"
          >
            <ShisaSearch />
            Browse
          </Link>
          {session ? (
            <>
              <Link
                href="/create"
                className="text-zinc-700 dark:text-zinc-300 flex gap-1.5 items-center text-sm transition-transform active:scale-95"
              >
                <ShisaPlus />
                Create
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/about"
                className="text-zinc-700 dark:text-zinc-300 flex gap-1.5 items-center text-sm transition-transform active:scale-95"
              >
                <ShisaDocument />
                About
              </Link>
              <Link href={"/auth"}>
                <Button size={"sm"}>
                  <ShisaArrowRight />
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
