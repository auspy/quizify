import Link from "next/link";

function ControlPanel() {
  const cards = [
    {
      name: "CS30003",
      subject: `SCIENCE`,
      subjectCode: "MST1",
      createdAt: new Date().getFullYear(),
      type: "MST-1",
      examId: "MST1-2022",
    },
  ];

  return (
    <>
      <div
        className="w-full h-full"
        style={{
          borderTop: "1px solid var(--border)",
          backgroundColor: "#f4f4f4",
        }}
      >
        <h6 className="my-[20px]">Active Quizes</h6>
        <div className="cards pi30">
          {cards.map((card, i) => (
            <Link
              href={`/dashboard/${card.examId}`}
              style={{}}
              key={i}
              className="hover card min-w-[240px] max-w-[620px] md:max-w-[450px]"
            >
              <div
                className="rounded-t-2xl fccc"
                style={{
                  backgroundColor: "#5DE7A5",
                  border: "1px solid var(--border)",
                  height: 166,
                }}
              >
                <div className="cardSubCode">{card.name}</div>
                <p className="cardSub">{card.subject}</p>
              </div>
              <div
                className="rounded-b-2xl h-[70px] fccc cardTitle"
                style={{
                  backgroundColor: "white",
                  border: "1px solid var(--border)",
                  borderTop: "unset",
                }}
              >
                {card.type + " " + card.createdAt}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ControlPanel;
