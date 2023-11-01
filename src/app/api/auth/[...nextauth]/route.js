import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: 1,
    username: "John Doe",
    password: "password",
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // If no error and we have user data, return it
        const { username, password } = credentials;
        console.log("credentials", credentials);
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          return user;
        }
        // Return null if user data could not be retrieved
        throw new Error("user not found");
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    error: "/auth",
  },
});

export { handler as GET, handler as POST };
