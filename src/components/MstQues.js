import Link from "next/link";
import React from "react";
import { urlLocal } from "../../constants";
const getQuestions = async (examId) => {
  if (!examId) return;
  const data = await fetch(urlLocal + `/api/db/getQuestions/${examId}`).then(
    (res) => res.json()
  );
  console.log("data", data);
  return data;
};
const MstQues = async ({ examId }) => {
  const questions = (await getQuestions(examId)) || [];
  return (
    <div className="flex flex-col items-start pi30">
      <h2 className="mt-10">ExamID - {examId}</h2>
      <Link
        href={`/dashboard/${examId}/addQuestion`}
        className="fccc mt-5"
        style={{
          backgroundColor: "var(--dark)",
          color: "var(--white)",
          width: 170,
          height: 55,
          borderRadius: 5,
        }}
      >
        Add Question
      </Link>
      <div className="w-full mt-10 flex flex-col gap-3">
        {questions.length > 0 ? (
          questions.map((item, i) => (
            <div key={i}>
              <p className="ques">
                {i + 1}. {item.ques}
              </p>
              <div className="questionDetails">
                <p> Type: {item.type}</p>
                <p>Options: {item.options}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-10">No questions added yet</p>
        )}
      </div>
    </div>
  );
};

export default MstQues;
