"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Questions = ({ questions = [], examId, time = 300 }) => {
  const router = useRouter();
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [fullscreen, setFullscreen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const n = questions.length;
  const question = questions[currentQuestion];
  let divElements = [];
  const handleFinish = async () => {
    try {
      const data = questions;
      let result = 0;
      const mappedData = data.map((item, i) => {
        if (item.correct === answers[i]) {
          result += 1;
        }
        console.log(result);
        return item;
      });

      router.push(
        `/question/${examId}/result?score=${(result / questions.length) * 100}`
      );
    } catch (err) {
      console.error("Error", err);
    }
  };
  const sendToResult = () => handleFinish();
  // START MONITOR CHECK
  useEffect(() => {
    async function checkScreenConfiguration() {
      const details = await window.getScreenDetails();
      // console.log(
      //   "checkScreenConfiguration",
      //   details,
      //   window.screen.extended ||
      //     (details ? details.screens?.length > 1 : false)
      // );
      if (
        window.screen.extended ||
        (details ? details.screens?.length > 1 : false)
      ) {
        alert(
          "You have connected an external monitor. Please disconnect it to continue exam."
        );
      }
    }

    const i = setInterval(checkScreenConfiguration, 1000);
    return () => clearInterval(i);
  }, []);
  // END MONITOR CHECK

  // COUNT START
  const [timer, setTimer] = useState(time);
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  const leftAtRef = useRef(null);
  const [leftAt, setLeftAt] = useState(null); // [leftAt, setLeftAt
  const displayScaryImage = () => {
    const overlay = document.createElement("div");
    overlay.style = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
      `;

    const image = document.createElement("img");
    image.src = "/scary-image.jpg"; // Replace with your scary image URL
    image.style = `
        max-width: 80%;
        max-height: 80%;
      `;
    image.id = "scary-image";

    overlay.appendChild(image);
    document.body.appendChild(overlay);
    setTimeout(() => {
      // router.push("/");
      overlay.remove();
    }, 5000);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    if (timer <= 0) {
      alert("Time is up! Your exam has ended.");
      // send to result screen
      sendToResult();
    }
  }, [timer]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        console.log("Tab is active");
        console.log(
          "leftAt",
          leftAtRef.current,
          new Date().getTime() - leftAtRef.current
        );
        if (
          leftAtRef.current &&
          leftAtRef.current + 10000 < new Date().getTime()
        ) {
          alert("You have staryed out for too long. Your exam has ended.");
          // send to result screen
          sendToResult();
        }
        setLeftAt(null);
        leftAtRef.current = null;
      } else {
        console.log("Tab is inactive");
        leftAtRef.current = new Date().getTime();
        countRef.current = countRef.current + 1;
        setCount((p) => p + 1);
        if (countRef.current == 1) {
          displayScaryImage();
        }
        if (countRef.current > 3) {
          alert("You have exceeded tab switch chances. Your exam has ended.");
          // send to result screen
          sendToResult();
        } else {
          alert(
            `You left the tab. You have ${Number(
              3 - countRef.current
            )} chance remaining.`
          );
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [router]);
  const timerEle = <div>{formatTime(timer)}</div>;

  // END COUNT
  // FULLSCREEN START
  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenEnabled) {
        alert(
          "This browser does not suppport full screen mode. You Chrome, firefox or safari for exam."
        );
        setFullscreen(false);
      }
      if (
        !(
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement
        )
      ) {
        alert("Enter full screen mode to take exam.");
        setFullscreen(false);
      } else {
        console.log("Full screen mode is active");
        setFullscreen(true);
      }
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      const element = document.documentElement; // Replace with the element you
      if (element.requestFullscreen) {
        element.requestFullscreen().catch((error) => {
          console.error("Fullscreen request failed:", error);
        });
      } else if (element.mozRequestFullScreen) {
        // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        // Chrome, Safari, and Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        // IE/Edge
        element.msRequestFullscreen();
      }
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  if (!fullscreen) {
    return (
      <div className="w-full h-full fccc">
        {timerEle}
        <button onClick={() => toggleFullScreen()}>Enter Fullscreen</button>
      </div>
    );
  }
  // END FULLSCREEN

  for (let i = 1; i <= n; i++) {
    divElements.push(
      <div
        onClick={() => setCurrentQuestion(i - 1)}
        className="hover"
        key={i}
        style={{
          color:
            i - 1 == currentQuestion
              ? "#151515"
              : answers[i - 1]
              ? "#5DE7A5"
              : i - 1 < currentQuestion
              ? "#E7D15D"
              : "#888888",
          textAlign: "center",
          width: 55,
          height: 55,
        }}
      >
        <h2>{i}</h2>
      </div>
    );
  }
  const handleNext = () => {
    if (currentQuestion >= n - 1) {
      alert("All questions answered. Pls submit exam");
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <div className="flex">
        <div
          className="sub1 flex flex-col gap-4 p-7"
          style={{
            flex: 3,
          }}
        >
          <div className="flex gap-4">
            {timerEle}
            <button onClick={() => toggleFullScreen()}>
              Toggle Fullscreen
            </button>
          </div>

          <h2>Question {currentQuestion + 1}</h2>
          <p>{question?.ques}</p>
          {question?.type == "mcq" ? (
            <select
              onChange={(e) => {
                const a = [...answers];
                a[currentQuestion] = e.target.value;
                setAnswers(a);
              }}
              type="A"
            >
              {question?.options?.split(";").map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const a = [...answers];
                a[currentQuestion] = e.target.ans.value;
                setAnswers(a);
                e.target.ans.value = "";
                handleNext();
              }}
            >
              <textarea
                disabled={currentQuestion >= n}
                name="ans"
                rows={10}
              ></textarea>
              <button
                disabled={currentQuestion >= n}
                className="mt-3 font-semibold text-base"
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div
          className="h-screen w-full"
          style={{
            backgroundColor: "var(--bg2)",
            borderLeft: "1px solid var(--border)",
            flex: 1.5,
          }}
        >
          <div className="p-7 flex flex-col items-start gap-5">
            <div className="flex flex-wrap gap-4">{divElements}</div>
            <div className="flex gap-4">
              <button
                className="font-semibold text-base"
                disabled={currentQuestion >= n - 1}
                onClick={handleNext}
              >
                Next
              </button>
              <button
                className="font-semibold text-base"
                onClick={handleFinish}
              >
                Finish Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
