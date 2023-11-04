"use client";
import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

function ObjectDetect() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const enableMediaDevices = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setVideoStarted(true);

        if (stream) {
          alert("Your video and audio are being recorded.");
        }
      } catch (error) {
        console.error("Error accessing media devices", error);
      }
    };

    enableMediaDevices();
  }, []);

  useEffect(() => {
    if (videoStarted) {
      const runObjectDetection = async () => {
        const net = await cocoSsd.load();
        const interval = setInterval(() => {
          detect(net);
        }, 10);

        const showRoomAlert = () => {
          alert("Please show your room in 360 degrees of rotation.");
          const randomTime =
            Math.floor(Math.random() * (600000 - 300000 + 1)) + 300000; // Random time lega between 5 to 10 min
          setTimeout(showRoomAlert, randomTime);
        };

        const initialRandomTime =
          Math.floor(Math.random() * (600000 - 300000 + 1)) + 300000; // Initial random time
        setTimeout(showRoomAlert, initialRandomTime);

        return () => {
          clearInterval(interval);
        };
      };

      runObjectDetection();
    }
  }, [videoStarted]);

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);
      const ctx = canvasRef.current.getContext("2d");

      let personDetected = false;

      obj.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;
        ctx.beginPath();
        ctx.lineWidth = "2";

        if (prediction.class === "person") {
          ctx.strokeStyle = "blue";
          personDetected = true;
        } else {
          ctx.strokeStyle = "green";
          ctx.font = "18px Arial";
          ctx.fillStyle = "green";
          ctx.fillText(prediction.class, x, y);
        }

        ctx.rect(x, y, width, height);
        ctx.stroke();
      });

      if (!personDetected) {
        // alert("Object detected");
      }
    }
  };

  return (
    <>
      <div className="App">
        {videoStarted ? (
          <>
            <Webcam
              ref={webcamRef}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                width: "200px",
                height: "auto",
                borderRadius: "50%",
                border: "2px solid #fff",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
              mirrored={true}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                width: "200px",
                height: "auto",
                borderRadius: "50%",
                border: "2px solid #fff",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
            />
          </>
        ) : (
          <p>Requesting video and audio access...</p>
        )}
      </div>
    </>
  );
}

export default ObjectDetect;
