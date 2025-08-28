

import React from "react";
import Img from "../assets/explorer.png"; // adjust path if needed
import "../styles/bot.css"; // optional for styling

const Explorer= () => {
  const handleRedirect = () => {
    window.location.href = "https://scoratic-explorer-o1xc.vercel.app/";
  };

  return (
    <div className="bot-container">
      <h1 className="bot-title">Socratic Explorer</h1>
      <img src={Img} alt="Bot" className="bot-image" />
      <button className="start-btn" onClick={handleRedirect}>
        Let's Begin
      </button>
    </div>
  );
};

export default Explorer;
