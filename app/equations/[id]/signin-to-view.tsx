import { ShisaArrowRight } from "@/components/icons/Shisa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function SignInToView({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid h-72">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 justify-center bg-white dark:bg-zinc-900 backdrop-blur border border-zinc-200 dark:border-zinc-800 rounded-xl min-w-80 max-w-sm shadow-lg p-5 z-10">
        <hgroup className="text-center">
          <h3>{title}</h3>
          <p>{description}</p>
        </hgroup>
        <Link href={"/auth"}>
          <Button size={"sm"}>
            <ShisaArrowRight />
            Sign In
          </Button>
        </Link>
      </div>
      {children}
    </div>
  );
}
