import React from "react";
import botImg from "../assets/bot.png"; // adjust path if needed
import "../styles/bot.css"; // optional for styling

const Bot = () => {
  const handleRedirect = () => {
    window.location.href = "https://chat-bot-sac.vercel.app/";
  };

  return (
    <div className="bot-container">
      <h1 className="bot-title">Socratic Bot</h1>
      <img src={botImg} alt="Bot" className="bot-image" />
      <button className="start-btn" onClick={handleRedirect}>
        Start
      </button>
    </div>
  );
};

export default Bot;
