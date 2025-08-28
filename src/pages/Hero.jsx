import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";
import Signup from "./Signup"; // your signup popup

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
    textDecoration: "none",
  };

  return (
    <button
      style={{ ...baseStyle, ...(primary ? primaryStyle : secondaryStyle) }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <section className="hero">
      {/* Galaxy stars */}
      <div className="galaxy-bg">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className={`star ${i % 3 === 0 ? "small" : i % 3 === 1 ? "medium" : "large"}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Unlock Your Mind. One Question at a Time.</h1>
        <p className="hero-subtitle">
          Socratic Minds is a generative AI tutor that uses the Socratic method to help students build deep, intuitive knowledge of fractions—no memorization required.
        </p>

        <div className="hero-buttons">
          <Button onClick={() => setShowSignup(true)} primary>Sign Up</Button>
          <Link to="/learnmore">
            <Button>Learn More</Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">💬</span>
            <h3>AI-Powered Tutoring</h3>
            <p>Engage in a dynamic conversation with a GPT-powered tutor that guides you through complex topics.</p>
          </div>
          <div className="feature-card">
            <span className="icon">❓</span>
            <h3>Socratic Questioning</h3>
            <p>Our tutor asks probing questions, encouraging you to think critically and discover answers yourself.</p>
          </div>
          <div className="feature-card">
            <span className="icon">📊</span>
            <h3>Interactive Visualizers</h3>
            <p>See fractions come to life with simple, interactive block and pie chart representations.</p>
          </div>
          <div className="feature-card">
            <span className="icon">➕</span>
            <h3>Core Fraction Skills</h3>
            <p>Master key operations like comparison, simplification, addition, and subtraction with unlike denominators.</p>
          </div>
        </div>
      </section>

      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </section>
  );
};

export default Hero;
