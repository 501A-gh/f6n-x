"use client";
import CenterFlow from "@/components/ui/layout/center-flow";
import Container from "@/components/ui/layout/container";
import React, { useState } from "react";
import ExtractVars from "./extract-vars";
import LabelVars from "./label-vars";

export default function ComposeFlow({ userId }: { userId: string }) {
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
      <CenterFlow
        title="Create Equation"
        dscrp="Start by typing your LaTeX equation in the input field."
      >
        <Container>
          <ExtractVars latexInput={latexInput} setLatexInput={setLatexInput} />
        </Container>
      </CenterFlow>
    );
  }

  return (
    <CenterFlow
      title="Label Variables"
      dscrp="Labeling will help you remember what each variable stands for."
    >
      <Container>
        <LabelVars
          userId={userId}
          latexInput={latexInput}
          setLatexInput={setLatexInput}
        />
      </Container>
    </CenterFlow>
  );
}
