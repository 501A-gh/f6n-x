"use server";

import { signIn, signOut } from "@/server/auth";

export async function SignOut() {
  return await signOut();
}

export async function SignIn() {
  return await signIn("google");
}
