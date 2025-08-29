import { useState } from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import "./index.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./components/Details";
import LearnMore from "./components/LearnMore";
import Bot from "./pages/Bot";
import Games from "./pages/Games";
import Visual from "./pages/Visual";
import Explorer from "./pages/Explorer";
import Story from "./pages/Story";
import LearnFraction from "./pages/LearnFraction";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Generate stars only once
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    size: i % 3 === 0 ? "small" : i % 3 === 1 ? "medium" : "large",
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <>
      <main>
        {/* Stars in background */}
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.size}`}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          />
        ))}

        {/* Main App */}
        <BrowserRouter>
          <Navbar onLoginClick={() => setShowLogin(true)} />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/bot" element={<Bot />} />
            <Route path="/games" element={<Games />} />
            <Route path="/visualizer" element={<Visual />} />
            <Route path="/missions" element={<Explorer />} />
            <Route path="/story" element={<Story />} />
            <Route path="/learnfraction" element={<LearnFraction />} />
          </Routes>

          {/* Show Login Modal */}
          {showLogin && (
            <Login
              onClose={() => setShowLogin(false)}
              onSwitchToSignup={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            />
          )}

          {/* Show Signup Modal */}
          {showSignup && (
            <Signup
              onClose={() => setShowSignup(false)}
              onSwitchToLogin={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            />
          )}
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
