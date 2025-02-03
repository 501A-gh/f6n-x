import {
  ShisaBookmark,
  ShisaDocument,
  ShisaFolder,
  ShisaHistory,
} from "@/components/icons/Shisa";
import SlidingTabs from "@/components/ui/sliding-tabs";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <nav className="sticky top-0 z-20 px-6 py-2.5 bg-zinc-50/80 dark:dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800/70">
        <div className="wm-auto flex items-center justify-center">
          <SlidingTabs
            basePath="/dashboard"
            tabs={[
              {
                icon: <ShisaHistory />,
                title: "Recent",
                path: "",
              },
              {
                icon: <ShisaFolder />,
                title: "Folders",
                path: "folders",
              },
              {
                icon: <ShisaBookmark />,
                title: "Saved",
                path: "saved",
              },
              {
                icon: <ShisaDocument />,
                title: "Notes",
                path: "notes",
              },
            ]}
            orientation="horizontal"
          />
        </div>
      </nav>
      <div className="p-6">
        <div className="wm-auto">{children}</div>
      </div>
    </div>
  );
}
