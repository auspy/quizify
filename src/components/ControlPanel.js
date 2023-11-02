import Link from "next/link";
import { urlLocal } from "../../constants";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
const getCards = async (userId) => {
  if (!userId) return;
  const data = await fetch(urlLocal + `/api/db/getExams/${userId}`).then(
    (res) => res.json()
  );
  // console.log("data", data);
  return data;
};
const colors = ["5DE7A5", "E7D15D", "815DE7", "E75DB0"];
async function ControlPanel() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const newcards = await getCards(user?.id);
  const cards = (Array.isArray(newcards) && newcards) || [
    {
      name: "CS30003",
      subject: `SCIENCE`,
      subjectCode: "MST1",
      created_at: new Date().getFullYear(),
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
        <h6 className="my-[20px] w-full text-center">Active Quizes</h6>
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
                  backgroundColor:
                    `#${
                      colors[i % 4] +
                      Math.min(Math.ceil(Math.random() * 99) + 40, 100)
                    }` || "#5DE7A5",
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
                {card.type + " - " + new Date(card.created_at).getFullYear()}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ControlPanel;
