import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
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
  console.log("all available questions ", questions);
  return new Response(JSON.stringify(questions));
}

export { handler as GET };
