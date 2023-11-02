"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Questions = ({ questions = [], examId }) => {
  const router = useRouter();
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  //   console.log("==> answers", answers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const n = questions.length;
  const question = questions[currentQuestion];
  let divElements = [];

  for (let i = 1; i <= n; i++) {
    divElements.push(
      <div
        onClick={() => setCurrentQuestion(i - 1)}
        className="hover"
        key={i}
        style={{
          color:
            i - 1 == currentQuestion
              ? "#151515"
              : answers[i - 1]
              ? "#5DE7A5"
              : i - 1 < currentQuestion
              ? "#E7D15D"
              : "#888888",
          textAlign: "center",
          width: 55,
          height: 55,
        }}
      >
        <h2>{i}</h2>
      </div>
    );
  }
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const handleFinish = () => {
    // check answers and redirect to result page with result
    router.push(
      `/question/${examId}/result?answers=${JSON.stringify(answers)}`
    );
  };
  return (
    <>
      <div className="flex">
        <div
          className="sub1 flex flex-col gap-4 p-7"
          style={{
            flex: 3,
          }}
        >
          <h2>Question {currentQuestion + 1}</h2>
          <p>{question?.ques}</p>
          {question.type == "mcq" ? (
            <select
              onChange={(e) => {
                const a = [...answers];
                a[currentQuestion] = e.target.value;
                setAnswers(a);
              }}
              type="A"
            >
              {question?.options?.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const a = [...answers];
                a[currentQuestion] = e.target.ans.value;
                setAnswers(a);
                handleNext();
                e.target.ans.value = "";
              }}
            >
              <textarea name="ans" rows={10}></textarea>
              <button className="mt-3 font-semibold text-base">Submit</button>
            </form>
          )}
        </div>
        <div
          className="h-screen w-full"
          style={{
            backgroundColor: "var(--bg2)",
            borderLeft: "1px solid var(--border)",
            flex: 1.5,
          }}
        >
          <div class="p-7 flex flex-col items-start gap-5">
            <div className="flex flex-wrap gap-4">{divElements}</div>
            <div className="flex gap-4">
              <button
                className="font-semibold text-base"
                disabled={currentQuestion == n - 1}
                onClick={handleNext}
              >
                Next
              </button>
              <button
                className="font-semibold text-base"
                onClick={handleFinish}
              >
                Finish Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
