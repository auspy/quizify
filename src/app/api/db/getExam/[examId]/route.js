import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { examId } = params;
  const e = await prisma.exams.findUnique({
    where: {
      examId: Number(examId),
    },
  });
  console.log("exam details", e);
  return new Response(JSON.stringify(e));
}

export { handler as GET };
