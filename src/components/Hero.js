const Hero = ({ heading = "😊 welcome to quizify 😉" }) => {
  return (
    <div className="my-20">
      <h5>Hello! User</h5>
      <h1>{heading}</h1>
    </div>
  );
};

export default Hero;
