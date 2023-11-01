import prisma from "../../../../../prisma/prismaClient";

async function handler(req) {
  const user = await prisma.users.findMany();
  return new Response(JSON.stringify(user));
}

export { handler as GET, handler as POST };
