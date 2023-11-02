import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { examId } = params;
  console.log("examId", examId);
  const e = await prisma.exams.findUnique({
    where: {
      examId: examId,
    },
  });
  console.log(await(req.json()));
  return new Response(e, examId);
}

export { handler as GET, handler as POST };
