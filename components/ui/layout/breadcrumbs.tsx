"use client";
import {
  ShisaChevronRight,
  ShisaCreateEquation,
  ShisaDocument,
  ShisaHome,
  ShisaPlus,
  ShisaSearch,
  ShisaSettings,
} from "@/components/icons/Shisa";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadcrumbIcon = ({ pathname }: { pathname: string }) => {
  switch (pathname) {
    case "browse":
      return <ShisaSearch />;
    case "about":
      return <ShisaDocument />;
    case "create":
      return <ShisaPlus />;
    // case "account":
    //   return <ShisaUser />;
    case "settings":
      return <ShisaSettings />;
    // case "notifications":
    //   return <ShisaBell />;
    // case "messages":
    //   return <ShisaMessages />;
    case "equation":
      return <ShisaCreateEquation />;
    default:
      return null;
  }
};

export default function Breadcrumbs() {
  const path = usePathname();
  const pathnames = path.split("/").filter((p) => p);

  const firstPathname = pathnames[0];
  const pathToIgnore = ["dashboard", "equations"];
  if (
    pathnames.length < 1 ||
    pathToIgnore.includes(firstPathname.toLowerCase())
  )
    return null;

  return (
    <header className="flex justify-between items-center top-0 sticky bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur z-50 px-6 border-b border-zinc-200 dark:border-zinc-800 py-3">
      <div className="flex items-center w-full wm-auto gap-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 select-none text-black dark:text-white transition-transform active:scale-95 text-md"
        >
          <ShisaHome />
        </Link>
        <div className="flex gap-0.5">
          {pathnames.map((pathname, index) => (
            <div key={index} className="flex gap-0.5 items-center">
              <ShisaChevronRight className="text-md text-zinc-400 dark:text-zinc-600" />
              <Link
                key={index}
                href={"/" + pathname}
                className={cn(
                  "flex items-center gap-1.5 capitalize px-2.5 py-1 hover:bg-zinc-100 rounded-full hover:dark:bg-zinc-800 font-medium text-sm text-black dark:text-white transition-transform active:scale-95 border border-transparent hover:border-zinc-300 hover:dark:border-zinc-700",
                  index === pathnames.length - 1 &&
                    "border-zinc-300 dark:border-zinc-700 shadow-sm"
                )}
              >
                {index === pathnames.length - 1 && (
                  <BreadcrumbIcon pathname={pathname} />
                )}
                {pathname}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
