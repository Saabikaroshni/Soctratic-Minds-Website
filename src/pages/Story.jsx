

import React from "react";
import Img from "../assets/story.png"; // adjust path if needed
import "../styles/bot.css"; // optional for styling

const Story= () => {
  const handleRedirect = () => {
    window.location.href = "https://adventures-szuj.vercel.app/";
  };

  return (
    <div className="bot-container">
      <h1 className="bot-title">Socratic Stories</h1>
      <img src={Img} alt="Bot" className="bot-image" />
      <button className="start-btn" onClick={handleRedirect}>
        Let's Begin
      </button>
    </div>
  );
};

export default Story;
