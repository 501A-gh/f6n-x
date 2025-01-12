"use server";
import { equations, variables } from "@/db/schema";
import { db } from "@/db";

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
  }[] = [];
  for (let i = 0; i < Number(formData.get("var-count")); i++) {
    variableData.push({
      label: String(formData.get(`input-${i}-label`)),
      placeholder: String(formData.get(`input-${i}-placeholder`)),
      unit: String(formData.get(`input-${i}-unit`)),
    });
  }

  const entry = await db.transaction(async (trx) => {
    // Insert the equation into the `latexCalculators` table
    const [equation] = await trx
      .insert(equations)
      .values({
        title: "Untitled",
        description: "No description",
        slug: "untitled",
        latex: latex,
      })
      .returning(); // Get the inserted calculator's ID

    // Prepare the variables data by attaching the calculator ID
    const variablesToInsert = variableData.map((variable) => ({
      equationId: equation.id,
      label: variable.label,
      placeholder: variable.placeholder,
      unit: variable.unit,
    }));

    // Insert the variables into the `variables` table
    await trx.insert(variables).values(variablesToInsert);
  });

  console.log(`Created equation: ${entry}`);
  // redirect(`/fx/${entry}`);

  return {
    latex: latex,
    variables: [""],
  };
};
