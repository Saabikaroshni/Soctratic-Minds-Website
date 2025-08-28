import React from "react";
import Img from "../assets/visual.png";
import "../styles/bot.css"


const Visual = () => {
  const handleRedirect = () => {
    window.location.href = "https://pie-chart-three.vercel.app/";
  };

  return (
    <div className="bot-container">
      <h1 className="bot-title">Socratic visualizer</h1>
      <img src={Img} alt="Bot" className="bot-image" />
      <button className="start-btn" onClick={handleRedirect}>
        Start
      </button>
    </div>
  );
};

export default Visual;
