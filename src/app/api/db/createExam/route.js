import prisma from "../../../../../prisma/prismaClient";

async function POST(req) {
  let { id, type, subject, subjectCode, color } = await req.json();
  id = String(id);
  const ques = await prisma.exams.create({
    data: { subject, id, type, subjectCode, color },
  });
  console.log("created exam ", ques);
  return new Response(JSON.stringify(ques));
}
export { POST as POST };
