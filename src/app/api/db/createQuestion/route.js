// issue of bigint

import prisma from "../../../../../prisma/prismaClient"

async function POST(req){
    let { ques, correct,type, examId  }= await req.json();
    examId = BigInt(examId);
    const question = await prisma.questions.create({
        data:{ques,correct,type, examId:examId.toString()}
        
    })
    console.log(question)
    return new Response(JSON.stringify(question))
}
export { POST as POST };