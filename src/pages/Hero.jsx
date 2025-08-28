import React, { useState } from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
import Signup from "./Signup"; // Create this file similar to Login.jsx

const Button = ({ children, primary = false, onClick }) => {
  const baseStyle = {
    padding: "0.75rem 1.5rem",
    fontWeight: "600",
    borderRadius: "9999px",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    border: "2px solid transparent",
  };

  const primaryStyle = {
    backgroundColor: "#3b82f6",
    color: "white",
  };

  const secondaryStyle = {
    backgroundColor: "transparent",
    borderColor: "white",
    color: "white",
  };

  return (
    <button style={{ ...baseStyle, ...(primary ? primaryStyle : secondaryStyle) }} onClick={onClick}>
      {children}
    </button>
  );
};

const Hero = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <section className="hero">
      <div className="fractions-bg">
        <span>½</span>
        <span>⅓</span>
        <span>¾</span>
        <span>¼</span>
        <span>⅔</span>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Unlock Your Mind. One Question at a Time.</h1>
        <p className="hero-subtitle">
          Socratic Minds is a generative AI tutor that uses the Socratic method to help students build deep, intuitive knowledge of fractions—no memorization required.
        </p>

        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", justifyContent: "center" }}>
          <Link to="/learnmore"><Button>Learn More</Button></Link>
          <Button primary onClick={() => setShowSignup(true)}>Sign Up</Button>
        </div>
      </div>

      {showSignup && (
        <Signup onClose={() => setShowSignup(false)} />
      )}
    </section>
  );
};

export default Hero;
