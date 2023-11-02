"use client"
import { useState } from 'react';

const AddQues = (props) => {
  function addOption(){
    console.log("hello");
  }
  const commonStyle = {
    style: {
      border: "1px solid var(--border)",
    },
  };

  const [message, setMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/db/createQuestion";
    const type = document.querySelector('.type').value;
    const ques = document.querySelector('.ques').value;
    const correct = document.querySelector('.correct').value;
    const option = document.querySelector(".option").value;
  

    const options = {
      method: "POST",
      body: JSON.stringify({
        type: type,
        ques: ques,
        correct: correct,
        examId: parseInt(props.examId),
        options:option
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      let data = await fetch(url, options);
      data = await data.json();
      if (data) {
        setMessage("Success");
      }
    }
    catch (err) {
      setMessage("Failure");
    }
  };

  return (
    <div className="pi30 mt-7">
      <h2 className="">Add question</h2>
      <div className="flex flex-col max-w-[400px]">
        <input {...commonStyle} type="text" placeholder="Type" className="type" />
        <input {...commonStyle} type="text" placeholder="question" className="ques" />
        <input {...commonStyle} type="text" placeholder="Answer" className="correct" />
        <input {...commonStyle} type="text" placeholder="Option" className="option" />
      
        <button id="signUp" className="btn" onClick={submit}>
          Add Question
        </button>
        {message && <h1>{message}</h1>}
      </div>
    </div>
  );
};

export default AddQues;
