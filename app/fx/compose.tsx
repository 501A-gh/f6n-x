"use client";
import React, { useState } from "react";
import ExtractVars from "./extract-vars";
import Container from "@/components/ui/layout/container";
import LabelVars from "./label-vars";

export default function Compose() {
  const [latexInput, setLatexInput] = useState<{
    latex: string;
    variables: string[];
  }>({
    latex: "",
    variables: [],
  });

  return (
    <>
      <Container
        title="Create Equation"
        dscrp="Start by typing your LaTeX equation in the input field."
        hide={latexInput.variables.length ? true : false}
      >
        <ExtractVars latexInput={latexInput} setLatexInput={setLatexInput} />
      </Container>
      <Container
        title="Label Variables"
        dscrp="Labeling will help you remember what each variable stands for."
        hide={latexInput.variables.length ? false : true}
      >
        <LabelVars latexInput={latexInput} setLatexInput={setLatexInput} />
      </Container>
    </>
  );
}
