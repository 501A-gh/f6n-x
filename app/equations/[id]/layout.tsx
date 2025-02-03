// import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShisaBookmark,
  ShisaEdit,
  ShisaHence,
  ShisaDocument,
  ShisaHistory,
  ShisaSettings,
} from "@/components/icons/Shisa";
import { db } from "@/server/db";
import { equations } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/server/auth";
import SlidingTabs from "../../../components/ui/sliding-tabs";

export default async function CalculatorLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const { id } = await params;
  const [equationData] = await db
    .select()
    .from(equations)
    .where(eq(equations.slug, id));

  const { title, description, slug } = equationData;

  return (
    <div className="wm-auto flex flex-col justify-center">
      <section className="pt-16 pb-6 flex items-start justify-between gap-6 flex-col sm:flex-row">
        <hgroup className="*:p-0 grid gap-1.5">
          <h1>{title}</h1>
          <p>{description}</p>
        </hgroup>
        <div className="flex gap-1.5">
          {session && (
            <Button variant={"secondary"} size={"sm"}>
              <ShisaEdit />
              Edit
            </Button>
          )}
          <Button variant={"secondary"} size={"sm"}>
            <ShisaBookmark />
            Save
          </Button>
        </div>
      </section>
      <section className="flex gap-8 py-6">
        <aside className="sticky top-14 z-20 w-80 h-fit">
          <nav>
            {/* className="grid gap-1.5 *:px-3 *:py-2 *:text-md text-zinc-700 dark:text-zinc-300 *:rounded-lg *:flex *:items-center *:gap-2 *:border *:border-transparent" */}
            <SlidingTabs
              basePath={`/equations/${slug}`}
              tabs={[
                {
                  icon: <ShisaHence />,
                  title: "Calculator",
                  path: "",
                },
                {
                  icon: <ShisaDocument />,
                  title: "Note",
                  path: "note",
                },
                {
                  icon: <ShisaHistory />,
                  title: "History",
                  path: "history",
                },
                {
                  icon: <ShisaSettings />,
                  title: "Settings",
                  path: "settings",
                },
              ]}
              orientation="vertical"
            />
            {/* <Link
              className="hover:bg-zinc-100 dark:hover:bg-zinc-900  hover:border-zinc-200 dark:hover:border-zinc-800"
              href={`/equations/${id}/`}
            >
              <ShisaHence />
              Calculator
            </Link>
            <Link
              className="hover:bg-zinc-100 dark:hover:bg-zinc-900  hover:border-zinc-200 dark:hover:border-zinc-800"
              href={`/equations/${id}/note`}
            >
              <ShisaDocument />
              Note
            </Link>
            <Link
              className="hover:bg-zinc-100 dark:hover:bg-zinc-900  hover:border-zinc-200 dark:hover:border-zinc-800"
              href={`/equations/${id}/vars`}
            >
              <ShisaHistory />
              History
            </Link>
            {session && (
              <Link
                className="hover:bg-zinc-100 dark:hover:bg-zinc-900  hover:border-zinc-200 dark:hover:border-zinc-800"
                href={`/equations/${id}/settings`}
              >
                <ShisaSettings />
                Settings
              </Link>
            )} */}
          </nav>
        </aside>
        <div className="w-full">{children}</div>
      </section>
    </div>
  );
}
