"use server";

export type CalculatexLatexReturnType =
  | {
      calculate: {
        latex: string;
        variables: {
          key: string;
          value: number;
        }[];
      };
      answer: {
        status: "success";
        result: string;
        steps: string[];
      };
    }
  | {
      answer: {
        status: "failed" | "empty";
      };
    };

export const calculateLatex = async (
  prev: CalculatexLatexReturnType,
  formData: FormData
): Promise<CalculatexLatexReturnType> => {
  if (!formData) return prev;
  const latex = String(formData.get("latex"));

  const vars: {
    [key: string]: string;
  } = {};

  for (let i = 0; i < Number(formData.get("var-count")); i++) {
    vars[String(formData.get(`input-${i}-key`))] = String(
      formData.get(`input-${i}-value`)
    );
  }

  console.log({
    latex: latex,
    variables: vars,
  });

  const response = await fetch(`${process.env.LAMBDA_ENDPOINT}/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      latex: latex,
      variables: vars,
    }),
  });

  if (!response.ok) {
    return {
      answer: {
        status: "failed",
      },
    };
  }

  const { result, steps } = await response.json();

  return {
    calculate: {
      latex: latex,
      variables: Object.keys(vars).map((key) => ({
        key: key,
        value: Number(vars[key]),
      })),
    },
    answer: {
      status: "success",
      result: result,
      steps: steps,
    },
  };
};
