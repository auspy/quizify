"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const ExamTimer = ({ duration }) => {
  const [timer, setTimer] = useState(duration);
  const router = useRouter();

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

    overlay.appendChild(image);
    document.body.appendChild(overlay);
    setTimeout(() => {
      router.push("/");
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      alert("Time is up! Your exam has ended.");
    }
  }, [timer]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        console.log("Tab is active");
      } else {
        console.log("Tab is inactive");
        displayScaryImage();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [router]);
  console.log("router", router);

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement
      ) {
        console.log("Full screen mode is active");
      } else {
        console.log("Not in full screen mode");
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <>
      <div>{formatTime(timer)}</div>
    </>
  );
};

export default ExamTimer;
