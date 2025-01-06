import React from "react";
import ComposeSteps from "./compose";
import Header from "@/components/ui/layout/header";

export default async function ComposeFx() {
  // const data = {
  //   title: "My Equation",
  //   description: "This is a page for my equation",
  //   latex: "\frac{1}{2}",
  // };

  // const { title, description } = data;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="p-6 flex items-center flex-col w-full h-full flex-1">
        <ComposeSteps />
      </section>
    </main>
  );
}
