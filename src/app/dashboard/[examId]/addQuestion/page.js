import Header from "../../../../components/Header";
import AddQues from "../../../../components/AddQues";
import "../../../loginPage.css";
const page = ({ params }) => {
  return (
    <>
      <Header />
      <AddQues />
    </>
  );
};

export default page;
