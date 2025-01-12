"use client";
import React, { useState } from "react";
import ExtractVars from "./extract-vars";
import ComposeLatex from "./compose-latex";
import Container from "@/components/ui/layout/container";

export default function ComposeFx() {
  const [latexInput, setLatexInput] = useState<{
    latex: string;
    variables: string[];
  }>({
    latex: "",
    variables: [],
  });

  const extracted = latexInput.variables.length > 0 ? true : false;

  if (!extracted) {
    return (
      <Container
        title="Create Equation"
        dscrp="Start by typing your LaTeX equation in the input field."
      >
        <ExtractVars latexInput={latexInput} setLatexInput={setLatexInput} />
      </Container>
    );
  }

  return (
    <Container
      title="Label Variables"
      dscrp="Labeling will help you remember what each variable stands for."
    >
      <ComposeLatex latexInput={latexInput} setLatexInput={setLatexInput} />
    </Container>
  );
}
