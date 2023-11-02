"use client";

import { useState } from "react";
import { urlLocal } from "../../constants";
import { useRouter } from "next/navigation";

const EnterExam = () => {
  const router = useRouter();
  const [examCode, setExamCode] = useState("");
  const handleClick = async () => {
    const data = await fetch(urlLocal + `/api/db/getExam/` + examCode).then(
      (res) => res.json()
    );
    if (!data) {
      alert("No exam found with for code " + examCode);
      return;
    }
    router.push(`/question/${data.examId}`);
    // console.log("data in client", data);
  };
  return (
    <>
      <div className="w-full fcc gap-5">
        <input
          style={{
            backgroundColor: "white",
            width: "100%",
            maxWidth: 400,
            height: 55,
            borderRadius: 5,
            border: "1px solid var(--border)",
            padding: "0 10px",
          }}
          value={examCode}
          onChange={(e) => setExamCode(e.target.value)}
          type="text"
          placeholder="Paste or Enter Code"
        />
        <button
          style={{
            backgroundColor: "var(--dark)",
            color: "var(--white)",
            width: "100%",
            maxWidth: 400,
            height: 55,
            borderRadius: 5,
          }}
          onClick={handleClick}
        >
          Start Exam
        </button>
      </div>
    </>
  );
};

export default EnterExam;
