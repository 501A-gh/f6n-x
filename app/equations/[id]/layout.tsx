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

const tabs = [
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
];

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

  const basePath = `/equations/${slug}`;

  return (
    <div className="px-6">
      <div className="wm-auto flex flex-col justify-center">
        <section className="pt-16 pb-6 flex items-start justify-between gap-6 flex-col sm:flex-row">
          <hgroup className="*:p-0 grid gap-1.5">
            <h1>{title}</h1>
            <p>{description}</p>
          </hgroup>
          {session && (
            <div className="flex gap-1.5">
              <Button variant={"secondary"} size={"sm"}>
                <ShisaEdit />
                Edit
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                <ShisaBookmark />
                Save
              </Button>
            </div>
          )}
        </section>
        <section className="flex flex-col lg:flex-row gap-4 lg:gap-8 py-6">
          <aside className="lg:sticky lg:top-14 lg:z-20 w-full lg:w-80 h-fit">
            <nav>
              <div className="lg:hidden">
                <SlidingTabs
                  basePath={basePath}
                  tabs={tabs}
                  orientation="horizontal"
                />
              </div>
              <div className="hidden lg:block">
                <SlidingTabs
                  basePath={basePath}
                  tabs={tabs}
                  orientation="vertical"
                />
              </div>
            </nav>
          </aside>
          <div className="w-full">{children}</div>
        </section>
      </div>
    </div>
  );
}
