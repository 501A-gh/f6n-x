import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/db";
import { DefaultSession, type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      slug?: string; // Add role to the session user as well
    } & DefaultSession["user"];
  }

  interface User {
    slug?: string; // Add the role property here
  }
}

export const authConfig = {
  adapter: DrizzleAdapter(db),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.slug = user.slug;
      return session;
    },
  },
} satisfies NextAuthConfig;
