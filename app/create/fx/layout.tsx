import Header from "@/components/ui/layout/header";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="p-6 flex items-center flex-col w-full h-full flex-1">
        {children}
      </section>
    </main>
  );
}
