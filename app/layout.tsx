import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        {children}
        <hr />
        <footer className="px-6 bg-white dark:bg-zinc-900/50">
          <div className="wm-auto flex flex-col h-fit py-12">
            <p>Design + Engineered by 501A</p>
            <p>Copywriting by Y.N.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
