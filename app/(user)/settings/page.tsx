import { SignOut } from "@/app/auth";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default async function SettingsPage() {
  const session = await auth();
  if (!session) redirect("/auth");

  const { name, email, image, slug } = session.user;

  return (
    <div className="grid wm-auto h-full py-12 ">
      <h1>Settings</h1>
      <form action={SignOut}>
        <Button type="submit" variant={"danger"}>
          Sign Out
        </Button>
      </form>
      <div className="grid gap-2 py-6">
        <section className="flex gap-3 items-center py-6">
          <Image
            src={String(image)}
            alt={`${name} Profile Picture`}
            width={50}
            height={50}
            className="rounded-full border border-zinc-200 dark:border-zinc-800 text-sky-600"
          />
          <hgroup className="grid gap-0 *:p-0">
            <div className="flex gap-2 items-center">
              <h3 className="text-black dark:text-white m-0 p-0 w-fit">
                {name}
              </h3>
              <span className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm px-1.5 py-0.5 rounded-full">
                @{slug}
              </span>
            </div>
            <p>{email}</p>
          </hgroup>
        </section>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl py-4 px-6 text-white text-left w-full">
          <h3 className="text-black dark:text-white">Default Unit</h3>
          <p>
            Set your default unit for all calculations. This will be used as the
            default unit for all calculations.
          </p>
          {/* <b className="flex gap-2 items-center text-black dark:text-white text-lg">
            <ShisaCreateEquation />
            <span>Create Calculator</span>
          </b>
          <p>Create a calculator to solve your specific needs.</p> */}
        </div>
      </div>
    </div>
  );
}
