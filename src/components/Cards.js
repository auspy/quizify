// slide 2
import React from "react";
import { useState } from "react";
function Cards() {
  const [cards] = useState([
    {
      title: "CS30003",
      text: `MATHS`,
      para: "MST1-2022",
    },
    // {
    //     title: 'CS30003',
    //     text: `MATHS`,
    //     para: 'MST1-2022'
    // },
    // {
    //     title: 'CS30003',
    //     text: `MATHS`,
    //     para: 'MST1-2022'
    // },
    // {
    //     title: 'CS30003',
    //     text: `MATHS`,
    //     para: 'MST1-2022'
    // },
  ]);
  return (
    <>
      <div>
        <section>
          <div className="Container">
            <h6>Active Quizes</h6>
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>

                  <p>{card.para}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cards;
