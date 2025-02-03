import EquationLink from "@/components/ui/equation-link";
import Container from "@/components/ui/layout/container";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { equations } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardPage() {
  const session = await auth();
  if (!session || !session.user) redirect("/auth");

  const data = await db
    .select()
    .from(equations)
    .where(eq(equations.userId, session.user.id));

  return (
    <div>
      <section className="grid gap-3 py-3">
        <h1>My Folders</h1>
        {data.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-3">
            {data.map((d, i) => (
              <EquationLink key={i} data={d} type="grid" />
            ))}
          </div>
        ) : (
          <Container className="p-6">
            <p>No equations yet.</p>
          </Container>
        )}
      </section>
      <section className="grid gap-3 py-3">
        <h1>My Equations</h1>
        {data.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-3">
            {data.map((d, i) => (
              <EquationLink key={i} data={d} type="grid" />
            ))}
          </div>
        ) : (
          <Container className="p-6">
            <p>No equations yet.</p>
          </Container>
        )}
      </section>
      {/* <section className="grid gap-3 py-3">
        <h2>Notes</h2>
        <Container className="p-6">
          <p>No equations yet.</p>
        </Container>
      </section> */}
    </div>
  );
}
