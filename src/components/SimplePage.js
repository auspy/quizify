import Header from "./Header";
import Hero from "./Hero";
import EnterExam from "./EnterExam";
import ControlPanel from "./ControlPanel";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
const SimplePage = async ({ heading }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <>
      <Header />
      <Hero heading={heading} />
      {user?.username == "admin" ? (
        <ControlPanel userId={user?.id} />
      ) : (
        <EnterExam />
      )}
    </>
  );
};

export default SimplePage;
