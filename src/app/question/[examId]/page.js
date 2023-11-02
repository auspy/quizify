import { urlLocal } from "../../../../constants";
import Questions from "../../../components/Questions";
const getQuestions = async (examId) => {
  if (!examId) return;
  const data = await fetch(urlLocal + `/api/db/getQuestions/${examId}`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-store",
    },
  }).then((res) => res.json());
  // console.log("data", data);
  return data;
};
export default async function page({ params }) {
  const questions = (await getQuestions(params.examId)) || [];
  console.log("==> questions", questions);

  return (
    <>
      <Questions questions={questions} examId={params.examId} />
    </>
  );
}
