import prisma from "@/../prisma/prismaClient";

export async function GET(req) {
  const user = await prisma.users.findUnique({
    where: {
      username: "user",
    },
  });
  console.log("users", user);
  return new Response(JSON.stringify(user));
}
