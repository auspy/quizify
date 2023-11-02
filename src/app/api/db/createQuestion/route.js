import prisma from "../../../../../prisma/prismaClient";

async function POST(req) {
  let { ques, correct, type, examId } = await req.json();
  const question = await prisma.questions.create({
    data: { ques, correct, type, examId: examId },
  });
  console.log("created question ", question);
  return new Response(JSON.stringify(question));
}
export { POST as POST };
