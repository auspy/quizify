import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { id, username, password} = await req.json();
  console.log(id, username, password);
  const { user } = params;
  console.log("user", user);
  const u = await prisma.users.findUnique({
    where: {
      username,
    },
  });
  
  return new Response(JSON.stringify(username,password));
}

export { handler as GET };
