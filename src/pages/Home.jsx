import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Socratic Minds</h1>
      <div className="options-container">
        <Link to="/learnfraction" className="option-card">
          <h2>Socratic Learn</h2>
          <p>Learn Fractions Through Simple Explanation</p>
        </Link>
        <Link to="/bot" className="option-card">
          <h2>Socratic Bot</h2>
          <p>Chat and learn interactively with AI.</p>
        </Link>

        <Link to="/games" className="option-card">
          <h2>Socratic Games</h2>
          <p>Play fun and educational games.</p>
        </Link>

        <Link to="/visualizer" className="option-card">
          <h2>Socratic Visualizer</h2>
          <p>Visualize concepts and understand better.</p>
        </Link>

        <Link to="/missions" className="option-card">
          <h2>Socratic Explorer</h2>
          <p>Explore Fraction by Comparing,Adding, Subtracting</p>
        </Link>
        <Link to="/story" className="option-card">
          <h2>Socratic Stories</h2>
          <p>Learn Fractions Through Stories</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
