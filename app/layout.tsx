import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConnectorHorizontal } from "@/components/ui/connector";
import Header from "@/components/ui/layout/header";
import BreadcrumbsParent from "@/components/ui/layout/breadcrumbs-parent";

const instrumentSans = localFont({
  src: "./fonts/InstrumentSansVariable.ttf",
  variable: "--instrumentSans",
  weight: "400 500 600 700",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Hence",
  description: "The Everything Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} antialiased bg-zinc-50 dark:bg-zinc-950`}
      >
        <main className="min-h-screen flex flex-col">
          <Header />
          <BreadcrumbsParent />
          <section className="flex-1 flex flex-col">{children}</section>
        </main>
        <hr />
        <footer className="bg-white dark:bg-zinc-900/50">
          <div className="px-6">
            <div className="wm-auto flex flex-col h-fit py-12">
              <p>Design + Engineered by 501A</p>
              <p>Copywriting by Y.N.</p>
            </div>
          </div>
          <ConnectorHorizontal className="w-full pb-1.5" />
        </footer>
      </body>
    </html>
  );
}
