import prisma from "../../../../../prisma/prismaClient";

async function POST(req) {
  let { id, type, subject, subjectCode, color } = await req.json();
  id = String(id);
  if (id != "7c3fde91-5633-4ea7-a9a4-1f2ccd574b89") {
    // only admin can create exam for now
    console.log("Unauthorized");
    return new Response("Unauthorized");
  }
  const ques = await prisma.exams.create({
    data: {
      subject,
      id,
      type,
      subjectCode,
      color,
    },
  });
  console.log("created exam ", ques);
  return new Response(JSON.stringify(ques));
}
export { POST as POST };
