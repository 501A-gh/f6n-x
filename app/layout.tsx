import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const funnelDisplay = localFont({
  src: "./fonts/FunnelDisplayVariable.ttf",
  variable: "--funnelDisplay",
  weight: "400 500 600 700",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "f6n",
  description: "The Everything Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${funnelDisplay.variable} antialiased bg-zinc-950`}>
        {children}
        <footer className="px-6">
          <div className="mx-auto max-w-[600px] flex flex-col justify-center items-center h-fit *:text-white py-16">
            <h3>f6n</h3>
            <p>Design & engineered by 501A</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
