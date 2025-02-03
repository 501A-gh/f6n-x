import { ShisaFolder } from "@/components/icons/Shisa";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>Folders</h1>
      <Link
        className="hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 text-white flex items-center gap-2"
        href={`/equations`}
      >
        <ShisaFolder />
        Folder 1
      </Link>
    </div>
  );
}
