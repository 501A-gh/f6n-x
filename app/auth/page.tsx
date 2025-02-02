import React from "react";
import { ConnectorHorizontal } from "@/components/ui/connector";
import Link from "next/link";
import { auth } from "@/server/auth";
import { SignIn } from ".";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <section className="flex items-center justify-center flex-col w-full mx-auto my-auto gap-10">
      <div className="flex flex-col h-fit max-w-120 w-full bg-gradient-to-t from-white to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-md overflow-clip">
        <div className="p-9 grid gap-9">
          <hgroup className="grid gap-3">
            <h1>Login</h1>
            <p>
              Sign in with your Google account to create, save and organize your
              equations.
            </p>
          </hgroup>
          <form
            className="flex justify-between items-end gap-6"
            action={SignIn}
          >
            <button className="inline-flex w-fit min-w-fit items-center justify-center gap-2 rounded-full border border-zinc-300/90 bg-white/80 px-3 py-2 text-sm text-zinc-700 no-underline shadow-sm backdrop-blur transition-all hover:border-zinc-300 hover:bg-zinc-100/80 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-400 hover:dark:border-zinc-600 hover:dark:bg-zinc-800/80">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ display: "block" }}
                className={`mr-1 size-4`}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
              <span>Continue With Google</span>
            </button>
          </form>
        </div>
        <ConnectorHorizontal className="w-full pb-1.5 opacity-50" />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xs opacity-50">
          By signing in, you agree to our{" "}
          <Link className="underline" href="/tos">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="underline" href="privacy">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
