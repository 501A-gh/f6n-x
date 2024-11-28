import { Button } from "@/components/ui/button";
import LatexPreview from "./latex-preview";

export default async function Page({
  params,
}: {
  params: Promise<{ latex: string }>;
}) {
  const slug = (await params).latex;
  return (
    <main className="min-h-screen bg-white px-6">
      <div className="mx-auto max-w-[600px] flex flex-col justify-center h-screen">
        <LatexPreview />
        {slug}
        <fieldset className="flex items-center gap-2">
          <Button>Sign up</Button>
          <Button variant={"secondary"}>Sign up</Button>
          <Button variant={"outline"}>Sign up</Button>
          <Button variant={"danger"}>Sign up</Button>
        </fieldset>
      </div>
    </main>
  );
}
