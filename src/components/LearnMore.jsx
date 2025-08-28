import React, { useEffect } from 'react';

// Simple SVG Icon components for visual clarity
const QuestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7v0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2m0 15A2.5 2.5 0 0 1 12 19.5v0A2.5 2.5 0 0 1 9.5 22v0A2.5 2.5 0 0 1 7 19.5v0A2.5 2.5 0 0 1 9.5 17m7-15A2.5 2.5 0 0 1 19 4.5v0A2.5 2.5 0 0 1 16.5 7v0A2.5 2.5 0 0 1 14 4.5v0A2.5 2.5 0 0 1 16.5 2m0 15A2.5 2.5 0 0 1 19 19.5v0A2.5 2.5 0 0 1 16.5 22v0A2.5 2.5 0 0 1 14 19.5v0A2.5 2.5 0 0 1 16.5 17M12 2a2.5 2.5 0 0 1 2.5 2.5v0A2.5 2.5 0 0 1 12 7v0A2.5 2.5 0 0 1 9.5 4.5v0A2.5 2.5 0 0 1 12 2m0 15a2.5 2.5 0 0 1 2.5 2.5v0A2.5 2.5 0 0 1 12 22v0A2.5 2.5 0 0 1 9.5 19.5v0A2.5 2.5 0 0 1 12 17"></path><path d="M16 7.5c0 1.5-.5 2.5-2.5 2.5S11 9 11 7.5s.5-2.5 2.5-2.5 2.5 1 2.5 2.5m-8 0c0 1.5-.5 2.5-2.5 2.5S3 9 3 7.5s.5-2.5 2.5-2.5 2.5 1 2.5 2.5m8 8c0 1.5-.5 2.5-2.5 2.5s-2.5-1-2.5-2.5.5-2.5 2.5-2.5 2.5 1 2.5 2.5m-8 0c0 1.5-.5 2.5-2.5 2.5s-2.5-1-2.5-2.5.5-2.5 2.5-2.5 2.5 1 2.5 2.5"></path>
  </svg>
);
const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6v-2.5c0-2.2-1.8-4-4-4H9c-2.2 0-4 1.8-4 4V18Z"></path><path d="M12 11.5V14"></path><path d="M8 18v2a4 4 0 0 0 8 0v-2"></path><path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 2.2 1.8 4 4 4h1c2.2 0 4-1.8 4-4A4.5 4.5 0 0 0 12 2Z"></path>
  </svg>
);


const LearnMore = () => {
  // This effect adds the 'visible' class to elements when they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Cleanup observer on component unmount
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);


  return (
    <>
      <style>{`
        /* --- Global Styles & Variables --- */
        :root {
          --dark-bg: #0d1117;
          --primary-blue: #3b82f6;
          --light-slate: #c9d1d9;
          --dark-slate: #8b949e;
          --card-bg: rgba(30, 41, 59, 0.5);
          --border-color: rgba(139, 148, 158, 0.3);
        }

        .learn-more-container {
          background-color: var(--dark-bg);
          color: var(--light-slate);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden; /* Prevent horizontal scroll from animations */
        }

        /* --- General Section Styling --- */
        .learn-section {
          padding: 6rem 2rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #fff;
        }

        /* --- Introduction Section --- */
        .intro-section {
          min-height: 60vh;
          background: linear-gradient(180deg, #111827 0%, var(--dark-bg) 100%);
        }

        .intro-section h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .intro-section p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
          color: var(--dark-slate);
          line-height: 1.6;
        }

        /* --- Socratic Process Section --- */
        .socratic-process .process-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          width: 100%;
          max-width: 1100px;
        }

        .card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
        }

        .card-icon {
          color: var(--primary-blue);
          margin-bottom: 1.5rem;
        }

        .card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #fff;
        }

        .card p {
          color: var(--light-slate);
          line-height: 1.6;
        }

        /* --- Tech Explanation Section --- */
        .tech-explanation .content-wrapper {
            display: flex;
            gap: 4rem;
            text-align: left;
        }

        .tech-column {
            flex: 1;
        }
        .tech-column ul {
            list-style: none;
            padding-left: 0;
        }
        .tech-column li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        .tech-column li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--primary-blue);
            font-weight: bold;
        }

        /* --- Visualizer Demo --- */
        .visualizer-demo {
            background: #010409;
            padding: 2rem;
            border-radius: 12px;
            margin-top: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .fraction-bar-container {
            text-align: center;
            color: var(--light-slate);
        }
        .fraction-bar-container span {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            display: block;
        }
        .bar {
            height: 30px;
            width: 150px;
            background: linear-gradient(90deg, var(--primary-blue) var(--fill), var(--card-bg) var(--fill));
            border: 1px solid var(--primary-blue);
            border-radius: 4px;
            animation: fill-bar 2s ease-out forwards;
        }
        .bar.half { --fill: 50%; }
        .bar.third { --fill: 33.33%; }
        .bar.five-sixths { --fill: 83.33%; }

        .plus-sign, .equals-sign {
            font-size: 2rem;
            color: var(--primary-blue);
            font-weight: bold;
        }

        @keyframes fill-bar {
            from { background: linear-gradient(90deg, var(--primary-blue) 0%, var(--card-bg) 0%); }
            to { background: linear-gradient(90deg, var(--primary-blue) var(--fill), var(--card-bg) var(--fill)); }
        }


        /* --- Go Back Button Section --- */
        .go-back-section {
          background: var(--dark-bg);
          border-bottom: none;
          padding: 4rem 2rem;
        }

        .go-back-button {
          background: var(--primary-blue);
          color: white;
          text-decoration: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
        }

        .go-back-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 25px rgba(59, 130, 246, 0.3);
        }

        /* --- Scroll Animation --- */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered animation for cards */
        .card.animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
        .card.animate-on-scroll:nth-child(3) { transition-delay: 0.4s; }
        .tech-column.animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }


        /* --- Responsive Design --- */
        @media (max-width: 768px) {
          .learn-section { padding: 4rem 1rem; }
          .intro-section h1 { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .tech-explanation .content-wrapper { flex-direction: column; gap: 3rem; }
        }
      `}</style>
      <div className="learn-more-container">
        {/* --- Section 1: Introduction --- */}
        <section className="learn-section intro-section">
          <div className="content-wrapper">
            <h1 className="animate-on-scroll">Beyond Memorization: The Art of True Understanding</h1>
            <p className="animate-on-scroll">
              Traditional learning often focuses on memorizing rules and formulas. For a topic like fractions, this is like learning the words to a song without ever hearing the music. You might be able to recite it, but you'll never feel the rhythm. The Socratic Method is our way of teaching you the music.
            </p>
          </div>
        </section>

        {/* --- Section 2: The Socratic Method Explained --- */}
        <section className="learn-section socratic-process">
          <h2 className="section-title animate-on-scroll">The Three Steps of Discovery</h2>
          <div className="process-cards">
            <div className="card animate-on-scroll">
              <div className="card-icon"><QuestionIcon /></div>
              <h3>1. The Gentle Question</h3>
              <p>Instead of stating a fact, our AI tutor begins with a question. Not a test, but an invitation to observe. For example: "You have 1/2 and 1/4. What do you notice about the denominators?"</p>
            </div>
            <div className="card animate-on-scroll">
              <div className="card-icon"><BrainIcon /></div>
              <h3>2. Guided Exploration</h3>
              <p>Your answer guides the next question. The AI helps you connect ideas, probe assumptions, and build a chain of logic, piece by piece. It's a conversation where you are the one making the discoveries.</p>
            </div>
            <div className="card animate-on-scroll">
              <div className="card-icon"><LightbulbIcon /></div>
              <h3>3. The "Aha!" Moment</h3>
              <p>Eventually, you arrive at the core concept on your own. This moment of insight—this "Aha!"—is powerful. It creates deep, lasting knowledge because it's knowledge you built yourself.</p>
            </div>
          </div>
        </section>
        
        {/* --- Section 3: AI & Visualizer Roles --- */}
        <section className="learn-section tech-explanation">
           <div className="content-wrapper">
              <div className="tech-column animate-on-scroll">
                  <h2 className="section-title">The Role of AI: Your Personal Socrates</h2>
                  <p>Our generative AI is the engine of this process. It's not a simple chatbot. It's trained to:</p>
                  <ul>
                      <li><strong>Listen & Adapt:</strong> It analyzes your responses to tailor the next question specifically to your line of thinking.</li>
                      <li><strong>Never Give Up:</strong> The AI won't just give you the answer if you're stuck. It will rephrase the question or offer a simpler analogy.</li>
                      <li><strong>Encourage Critical Thought:</strong> It pushes you to explain *why* you think something, solidifying your understanding.</li>
                  </ul>
              </div>
              <div className="tech-column animate-on-scroll">
                  <h2 className="section-title">The Visualizer: Making Fractions Concrete</h2>
                  <p>It's hard to understand "common denominators" with just numbers. Our visualizer makes it tangible:</p>
                  <div className="visualizer-demo">
                      <div className="fraction-bar-container">
                          <span>1/2</span>
                          <div className="bar half"></div>
                      </div>
                      <div className="plus-sign">+</div>
                      <div className="fraction-bar-container">
                          <span>1/3</span>
                          <div className="bar third"></div>
                      </div>
                      <div className="equals-sign">=</div>
                      <div className="fraction-bar-container result">
                          <span>5/6</span>
                          <div className="bar five-sixths"></div>
                      </div>
                  </div>
                   <p>By seeing fractions as parts of a whole, you intuitively grasp why 1/2 is bigger than 1/3, and what it means to find a common unit to add them together.</p>
              </div>
           </div>
        </section>

        {/* --- Section 4: Go Back Button --- */}
        <section className="learn-section go-back-section">
          <a href="/" className="go-back-button">
            Go Back Home
          </a>
        </section>
      </div>
    </>
  );
};

export default LearnMore;
