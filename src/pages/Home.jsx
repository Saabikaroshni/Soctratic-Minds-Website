import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// --- Your Firebase Configuration ---
// IMPORTANT: Replace with your actual Firebase config object
const firebaseConfig = {
   apiKey: "AIzaSyB4v11yhnlHwNFa7Pkf-ToSV8QSrY7MbP8",
  authDomain: "socratic-minds-c7630.firebaseapp.com",
  projectId: "socratic-minds-c7630",
  storageBucket: "socratic-minds-c7630.firebasestorage.app",
  messagingSenderId: "596355170278",
  appId: "1:596355170278:web:69b6f5e0fff3ea5981a027",
  measurementId: "G-VC6VCKC5BT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This listener checks for changes in the user's sign-in state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Display a loading message while Firebase is checking auth state
  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <>
      <style>{`
        /* --- Global Styles --- */
        :root {
          --dark-bg: #0d1117;
          --primary-blue: #3b82f6;
          --light-slate: #c9d1d9;
          --card-bg: rgba(30, 41, 59, 0.5);
          --border-color: rgba(139, 148, 158, 0.3);
        }

        /* --- Loading Screen --- */
        .loading-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: var(--dark-bg);
          color: var(--light-slate);
          font-size: 1.5rem;
          font-family: 'Inter', sans-serif;
        }

        /* --- Home Container --- */
        .home-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
          color: white;
          text-align: center;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .home-content {
          z-index: 1;
          padding: 2rem;
          animation: fadeIn 1.5s ease-out forwards;
        }

        /* --- Welcome Text Styling --- */
        .welcome-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
          background: -webkit-linear-gradient(45deg, #a8b2ff, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .welcome-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          color: var(--light-slate);
          line-height: 1.6;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        /* --- Call-to-Action Buttons --- */
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 1s forwards;
        }

        .cta-button {
          text-decoration: none;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .cta-button.primary {
          background-color: var(--primary-blue);
          color: white;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
        }

        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 25px rgba(59, 130, 246, 0.3);
        }

        .cta-button.secondary {
          background-color: transparent;
          color: var(--light-slate);
          border-color: var(--border-color);
        }

        .cta-button.secondary:hover {
          background-color: var(--card-bg);
          color: white;
          border-color: var(--primary-blue);
        }


        /* --- Keyframe Animations --- */
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }


        /* --- Animated Star Background --- */
        @keyframes move-twink-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }

        .star-field {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .stars-1, .stars-2, .stars-3 {
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            width:100%;
            height:100%;
            display:block;
        }

        .stars-1 {
            background:transparent url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
            animation:move-twink-back 200s linear infinite;
        }
        .stars-2 {
            background:transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
            animation:move-twink-back 150s linear infinite;
        }
        .stars-3 {
            background:transparent url(https://www.script-tutorials.com/demos/360/images/clouds.png) repeat top center;
            animation:move-twink-back 100s linear infinite;
        }

        /* --- Responsive Design --- */
        @media (max-width: 768px) {
          .welcome-title { font-size: 2.5rem; }
          .welcome-subtitle { font-size: 1.1rem; }
          .cta-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>
      <div className="home-container">
        <div className="star-field">
          <div className="stars-1"></div>
          <div className="stars-2"></div>
          <div className="stars-3"></div>
        </div>
        <div className="home-content">
          <h1 className="welcome-title">
            {user ? `Welcome, ${user.displayName || user.email}` : 'Welcome to Socratic Minds'}
          </h1>
          <p className="welcome-subtitle">
            Your journey to understanding starts here. Let's unravel the world of fractions, one question at a time.
          </p>
          <div className="cta-buttons">
            <Link to="/learn" className="cta-button primary">
              Start a Lesson
            </Link>
            <Link to="/learn-more" className="cta-button secondary">
              How it Works
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
