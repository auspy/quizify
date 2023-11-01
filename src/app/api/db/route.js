import prisma from "../../../../prisma/prismaClient";

export async function GET(req) {
  const users = await prisma.users.findMany();
  console.log("users", users);
  return new Response(JSON.stringify(users));
}
