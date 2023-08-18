import { useState } from "react";

export const WebSpeech = () => {
    const [text, setText] = useState()
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition ;

  const recognition = new SpeechRecognition();
  recognition.addEventListener("start", () => {
    console.log("hi");
  });
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "ru-RU";
  recognition.addEventListener("result", (event) => {
    const results = event.results;
    console.log(results);
    setText(results[results.length-1][0].transcript);
    setText(results[results.length-1][0].transcript);
  });
  return (
    <>
      <button
        onClick={() => {
          recognition.start();
        }}
      >
        lets go
      </button>
      <button
        onClick={() => {
          recognition.stop();
        }}
      >
        lets stop
      </button>
      <h1>{text}</h1>
    </>
  );
};
