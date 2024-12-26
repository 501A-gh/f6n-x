import React from "react";
import ComposeSteps from "./compose-steps";

export default async function ComposeFx() {
  const data = {
    title: "My Equation",
    description: "This is a page for my equation",
    latex: "\frac{1}{2}",
  };

  const { title, description } = data;

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6">
      <div className="mx-auto max-w-[600px] flex flex-col justify-center">
        <hgroup className="py-12">
          <h1>{title}</h1>
          <p>{description}</p>
        </hgroup>
        <ComposeSteps />
      </div>
    </main>
  );
}
