import NextAuth, { Account, Profile, User } from 'next-auth';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import GoogleProvider from 'next-auth/providers/google';
import { JWT } from 'next-auth/jwt';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user, token }: {
      session: any; user: any; token: JWT;
    }) {
      if(session.user) {
        session.user.provider=token.provider;

      }
      return session
    },




    async jwt({ token, user, account, profile, isNewUser }: {
      token: JWT;
      user?: User | Adapater | undefined;
      account?: Account | null | undefined;
      profile?: Profile | undefined;
      isNewUser?: boolean | undefined;
    }) {
      if (user) {
        token.provider = account.provider
      }
      return token;
    }
  }
})