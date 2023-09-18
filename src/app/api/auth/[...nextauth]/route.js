import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (email !== 'sachin@openinapp.com' || password !== '123456') {
          alert('Invalid credentials!')
          return null
        }
        const user = { id: "1", name: "Sachin Sharma", email: "sachin@openinapp.com" }
        if (user) {
          return user
        } else {
          alert('Invalid credentials!')
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: "/auth/signIn"
  }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }