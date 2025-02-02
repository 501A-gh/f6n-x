import LatexPreview from "../../../components/ui/latex-preview";
import { db } from "@/server/db";
import { equations, variables } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ConnectorVertical } from "@/components/ui/connector";
import Calculate from "./calculate";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [equationData] = await db
    .select()
    .from(equations)
    .where(eq(equations.slug, id));

  const { latex } = equationData;
  const variablesData = await db
    .select()
    .from(variables)
    .where(eq(variables.equationId, equationData.id));

  return (
    <div className="grid">
      <Accordion
        type="single"
        collapsible
        className="rounded-2xl cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm text-black dark:text-white"
        defaultValue="equation"
      >
        <AccordionItem value="equation">
          <AccordionTrigger>Equation</AccordionTrigger>
          <AccordionContent className={`p-0`}>
            <hr />
            <div className="pb-4">
              <LatexPreview latex={latex} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ConnectorVertical />
      <Calculate latex={latex} variablesData={variablesData} />
    </div>
  );
}
