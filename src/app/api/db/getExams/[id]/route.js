import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { id } = params;
  console.log("getting exams of user ", id);
  const e = await prisma.exams.findMany({
    where: {
      id: String(id),
    },
    orderBy: {
      examId: "asc",
    },
  });
  console.log("total exams found ", e.length);
  return new Response(JSON.stringify(e));
}

export { handler as GET };
