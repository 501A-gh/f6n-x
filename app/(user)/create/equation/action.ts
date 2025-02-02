"use server";
import { equations, variables } from "@/server/db/schema";
import { db } from "@/server/db";
import { redirect } from "next/navigation";

export const extractVars = async (
  prev: {
    extract: {
      latex: string;
      exclude_constants: boolean;
    };
    variables: string[];
  },
  formData: FormData
) => {
  if (!formData) return prev;
  const formInput = {
    latex: String(formData.get("latex-input")),
    exclude_constants: Boolean(formData.get("exclude-constants")),
    variables: [],
  };

  console.log(formInput);
  const response = await fetch(`${process.env.LAMBDA_ENDPOINT}/extract-vars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      latex: formInput.latex,
      exclude_constants: formInput.exclude_constants,
    }),
  });

  console.log(response.status);
  if (!response.ok) throw new Error("Failed to extract variables");
  const data = await response.json();

  return {
    ...prev,
    extract: {
      latex: formInput.latex,
      exclude_constants: formInput.exclude_constants,
    },
    variables: data.variables,
  };
};

export const composeLatex = async (
  prev: {
    latex: string;
    variables: string[];
  },
  formData: FormData
) => {
  if (!formData) return prev;
  const latex = String(formData.get("latex"));

  const variableData: {
    label: string;
    placeholder: string;
    unit: string;
    latex: string;
  }[] = [];
  for (let i = 0; i < Number(formData.get("var-count")); i++) {
    variableData.push({
      label: String(formData.get(`input-${i}-label`)),
      placeholder: String(formData.get(`input-${i}-placeholder`)),
      unit: String(formData.get(`input-${i}-unit`)),
      latex: String(formData.get(`input-${i}-latex`)),
    });
  }

  const entry = await db.transaction(async (trx) => {
    const [equation] = await trx
      .insert(equations)
      .values({
        title: String(formData.get("title")),
        description: String(formData.get("description")),
        latex: latex,
        userId: String(formData.get("userId")),
      })
      .returning(); // Get the inserted calculator's ID

    // Prepare the variables data by attaching the calculator ID
    const variablesToInsert = variableData.map((variable) => ({
      equationId: equation.id,
      label: variable.label,
      placeholder: variable.placeholder,
      unit: variable.unit,
      latex: variable.latex,
    }));

    // Insert the variables into the `variables` table
    await trx.insert(variables).values(variablesToInsert);
    return equation;
  });

  redirect(`/equation/${entry.id}`);
};
