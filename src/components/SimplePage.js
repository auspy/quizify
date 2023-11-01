import Header from "./Header";
import Hero from "./Hero";
import ControlPanel from "./ControlPanel";
const SimplePage = ({ heading }) => {
  return (
    <>
      <Header />
      <Hero heading={heading} />
      <ControlPanel />
    </>
  );
};

export default SimplePage;
