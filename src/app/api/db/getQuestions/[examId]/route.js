import prisma from "../../../../../../prisma/prismaClient";

export const dynamic = "force-dynamic";

async function handler(req, { params }, res) {
  const { examId } = params;
  const questions = await prisma.questions.findMany({
    where: {
      examId: Number(examId),
    },
  });
  // const exam = await prisma.exams.findUnique({
  //   where: {
  //     examId: Number(examId),
  //   },
  //   include: {
  //     questions: true,
  //   },
  // });
  console.log("all available questions ", questions, res);
  return new Response(JSON.stringify(questions));
}

export { handler as GET };
