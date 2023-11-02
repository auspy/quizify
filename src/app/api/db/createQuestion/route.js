import prisma from "../../../../../prisma/prismaClient";

async function POST(req) {
  let { ques, correct, type, examId,time,options } = await req.json();
  const question = await prisma.questions.create({
    data: { ques, correct, type, examId: Number(examId),options },
  });
  console.log("created question ", question);
  return new Response(JSON.stringify(question));
}
export { POST as POST };
