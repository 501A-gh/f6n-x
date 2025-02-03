// import { ShisaGlobe, ShisaHome } from "@/components/icons/Shisa";
import {
  ShisaBookmark,
  ShisaDocument,
  ShisaFolder,
  ShisaHome,
} from "@/components/icons/Shisa";
import SlidingTabs from "@/components/ui/sliding-tabs";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <nav className="sticky top-0 py-3 z-20 h-fit bg-zinc-50/80 dark:dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200/60 dark:border-zinc-800/60">
        <div className="wm-auto flex items-center">
          <SlidingTabs
            basePath="/dashboard"
            tabs={[
              {
                icon: <ShisaHome />,
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
