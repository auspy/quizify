const AddQues = () => {
  const commonStyle = {
    style: {
      border: "1px solid var(--border)",
    },
  };
  return (
    <div className="pi30 mt-7">
      <h2 className="">Add question</h2>
      <div className="flex flex-col max-w-[400px]">
        <input {...commonStyle} type="text" placeholder="Type" />
        <input {...commonStyle} type="text " placeholder="question" />
        <button id="signUp" className="btn">
          Add Question
        </button>
      </div>
    </div>
  );
};

export default AddQues;
