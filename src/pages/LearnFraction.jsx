import React from "react";
import Img from "../assets/learn.jpg"; // adjust path if needed
import "../styles/bot.css"; // optional for styling

const LearnFraction = () => {
  const handleRedirect = () => {
    window.location.href = "https://scoratic-learn.vercel.app/";
  };

  return (
    <div className="bot-container">
      <h1 className="bot-title">Socratic Learn</h1>
      <img src={Img} alt="Bot" className="bot-image" />
      <button className="start-btn" onClick={handleRedirect}>
        Start
      </button>
    </div>
  );
};

export default LearnFraction;