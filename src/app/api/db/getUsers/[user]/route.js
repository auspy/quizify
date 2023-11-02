import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { user } = params;
  const u = await prisma.users.findUnique({
    where: {
      username: user,
    },
  });
  console.log("IN DB GET USER HANDLER", u);

  return new Response(JSON.stringify(u));
}

export { handler as GET };
