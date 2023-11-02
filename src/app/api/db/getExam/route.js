import prisma from "../../../../../prisma/prismaClient";

async function handler(req) {
  const exam = await prisma.exams.findMany();
  console.log(exam);
  return new Response(exam);
}

export { handler as GET, handler as POST };
