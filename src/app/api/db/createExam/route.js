import prisma from "../../../../../prisma/prismaClient";

async function POST(req) {
  let { id, type, subject, subjectCode } = await req.json();
  id = String(id);
  const ques = await prisma.exams.create({
    data: { subject, id, type, subjectCode },
  });
  console.log("created exam ", ques);
  return new Response(JSON.stringify(ques));
}
export { POST as POST };
