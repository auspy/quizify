import Header from "../../../components/Header";
import MstQues from "../../../components/MstQues";
import "../../loginPage.css";
const page = ({ params }) => {
  return (
    <>
      <Header />
      <MstQues examId={params.examId} />
    </>
  );
};

export default page;
