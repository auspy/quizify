import prisma from "../../../../../prisma/prismaClient";

async function handler(req) {
  const questions = await prisma.questions.findMany();
  console.log(questions);
  return new Response(questions);
}

export { handler as GET, handler as POST };
