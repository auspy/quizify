import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { user } = params;
  console.log("user", user);
  const u = await prisma.users.findUnique({
    where: {
      username: user,
    },
  });
  return new Response(JSON.stringify(u, user));
}

export { handler as GET, handler as POST };
