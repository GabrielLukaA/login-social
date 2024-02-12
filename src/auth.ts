import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Twitter from "next-auth/providers/twitter";

export const { handlers, auth } = NextAuth({
  providers: [Github, Google,Facebook, Twitter],
});
