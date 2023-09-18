import NextAuth from "next-auth"
// import GoogleProviders from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      type: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (email !== 'jsmith@example.com' || password !== '123456') {
          return null
        }
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
    // ...add more providers here
  ],
  callbacks: async ({ baseUrl, url }) => {
    const redirectUrl = decodeURIComponent(url);
    const callbackIndex = redirectUrl.indexOf('callbackUrl=');
    if (callbackIndex > -1) {
        const callbackPath = redirectUrl.slice(callbackIndex + 12);
        // If I try to login from my homepage, the nested callbackUrl contains the full baseUrl.
        // This behavior seems to be triggerd if you call `signIn()` from a page.
        return callbackPath.includes(baseUrl) ? callbackPath : baseUrl + callbackPath;
    }
    return url;
},
  pages: {
    signIn: "/auth"
  }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }