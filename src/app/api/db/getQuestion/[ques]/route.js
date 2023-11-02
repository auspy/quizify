import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { quesId } = params;
  console.log("quesId", quesId);
  const e = await prisma.exams.findUnique({
    where: {
      quesId: quesId,
    },
  });
  console.log(await(req.json()));
  return new Response(e, quesId);
}

export { handler as GET, handler as POST };
