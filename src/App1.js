// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
// import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";

function App1() {
  const webcamRef = useRef();
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Get Video Properties
    const video = webcamRef.current;
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    // Set video width
    video.width = videoWidth;
    video.height = videoHeight;

    // Set canvas height and width
    const canvas = canvasRef.current;
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    // Make Detections
    const obj = await net.detect(video);

    // Draw mesh
    const ctx = canvas.getContext("2d");
    drawRect(obj, ctx);
  };

  useEffect(() => {
    const video = document.getElementById("myVideo");
    webcamRef.current = video;
    runCoco();
  }, []);

  return (
    <div className="App1">
      <header className="App-header1">
        <video
          id="myVideo"
          muted={true}
          autoPlay
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "right",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "right",
            zIndex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App1;

