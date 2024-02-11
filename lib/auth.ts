import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth } = NextAuth({
  providers: [GithubProvider, GoogleProvider],
  adapter: DrizzleAdapter(db),
});
