import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
        type: { label: "type", type: "select", options: ["login", "register"] },
      },
      async authorize(credentials, req) {
        // If no error and we have user data, return it
        const { username, password, type } = credentials;
        const user = await fetch(
          `http://localhost:3000/api/db/getUsers/${username?.trim()}`
        )
          .then((res) => {
            return res.json();
          })
          .catch((e) => {
            console.log(e, "error in authorize");
          });
        if (user && user.password === password) {
          console.log("-- login successful --");
          return user;
        }
        console.log("-- login failed --");
        // Return null if user data could not be retrieved
        throw new Error("user not found");
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
    signOut: "/",
  },
});

export { handler as GET, handler as POST };
