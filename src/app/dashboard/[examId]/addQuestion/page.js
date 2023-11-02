import Header from "../../../../components/Header";
import AddQues from "../../../../components/AddQues";
import "../../../loginPage.css";
const page = ({ params }) => {
  console.log(params.examId);
  return (
    <>
      <Header />
      <AddQues examId = {params.examId} />
    </>
  );
};

export default page;
