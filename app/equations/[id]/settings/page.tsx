import { ShisaArrowRight, ShisaChip } from "@/components/icons/Shisa";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import Link from "next/link";
import React from "react";
import SignInToView from "../signin-to-view";
import Container from "@/components/ui/layout/container";

export default async function SettingsPage() {
  const session = await auth();
  if (!session || !session.user)
    return (
      <SignInToView
        title="Sign in to view settings"
        description="Sign in to view your settings and make changes to your account."
      >
        <div className="grid gap-3 *:border *:border-zinc-200 *:dark:border-zinc-900 *:bg-zinc-100 *:dark:bg-zinc-900/50 *:w-full *:h-full *:rounded-lg *:blur-sm">
          <div />
          <div />
          <div />
        </div>
      </SignInToView>
    );

  return (
    <div className="grid gap-4">
      <Container className="px-6 py-5 *:p-0 grid gap-3">
        <h3>Visibility</h3>
        <p>
          Change the visibility of this equation. Public equations are visible
          to everyone, while private equations are only visible to you.
        </p>
      </Container>
      <Container className="px-6 py-5 *:p-0 grid gap-3">
        <h3>History</h3>
        <p>
          View the history of this equation to see how it has been used over
          time. You can disable this feature if you do not want to store the
          history of this equation.
        </p>
      </Container>
      <Container className="px-6 py-5 *:p-0 grid gap-3">
        <h3>Runtime</h3>
        <p>
          The runtime is the environment in which your equation is executed. For
          short equations, we recommend sticking with local. However, for longer
          equations, calculating on device may be slower than using a cloud
          runtime.
        </p>
        <div className="flex items-center gap-2">
          <ShisaChip />
          <span>Execute on device</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Execute on device</span>
        </div>
      </Container>
    </div>
  );
}
