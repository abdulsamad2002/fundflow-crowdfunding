import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
const { Schema, model } = mongoose;
import User from "@/models/User";
import connector from "@/mongo";

await connector();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "google") {
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
          });
          await newUser.save();
        }
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      console.log();
      session.user.name = dbUser.username;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
