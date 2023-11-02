import Header from "../../components/Header";
import "../globals.css"

export default function App() {
  let n = 20;
  let divElements = [];

  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(
      16
    )}`;

    return color;
  }

  function startTimer(){

  }

  for (let i = 1; i <= n; i++) {
    divElements.push(
      <div
        key={i}
        style={{
          color: getRandomColor(),
          height: 30,
          width: 30,
          textAlign: "center",
          marginRight: 10,
        }}
      >
        <h2>{i}</h2>
      </div>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <div className="sub1">
          <h2>Question 1</h2>
          <p>
            Lorem ipsum dolor sit amet. Et animi quas ut impedit ratione id quos
            omnis qui laborum impedit ea cupiditate quis. Ea tempore officia qui
            debitis architecto ad natus quidem At rerum amet et suscipit dolore.
          </p>
          <ol type="A">
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ol>
        </div>

        <div className="sub2">{divElements}</div>
      </div>
    </>
  );
}
