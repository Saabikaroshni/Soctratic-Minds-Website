import React from "react";
import Img from "../assets/voice.png";
import "../styles/bot.css"


const Voice = () => {
  const handleRedirect = () => {
    window.location.href = "https://speak-ai-one.vercel.app/";
  };

  return (
    <div className="bot-container">
      <h1 className="bot-title">Socratic Voice Challenger</h1>
      <img src={Img} alt="Bot" className="bot-image" />
      <button className="start-btn" onClick={handleRedirect}>
        Start
      </button>
    </div>
  );
};

export default Voice;
