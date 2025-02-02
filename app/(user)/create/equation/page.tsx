import { auth } from "@/server/auth";
import ComposeFlow from "./compose-flow";
import { redirect } from "next/navigation";

export default async function ComposeFx() {
  const session = await auth();
  if (!session) redirect("/auth");

  return <ComposeFlow userId={session.user.id} />;
}
