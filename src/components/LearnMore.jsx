import React from 'react';
import { Link } from 'react-router-dom'; // For the "Go Back" button
import { motion } from 'framer-motion'; // For animations
import '../styles/learn.css'; // The styles for this component

// You can use simple SVG icons or import them from a library like 'react-icons'
const IconAsk = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const IconDiscover = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path><path d="M12 12l-2 2"></path><path d="M12 12l2-2"></path><path d="M12 12l-2-2"></path><path d="M12 12l2 2"></path></svg>;
const IconThink = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;


const LearnMore = () => {
  // Animation variants for the container and its children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const socraticSteps = [
    {
      icon: <IconAsk />,
      title: 'Ask, Don’t Tell',
      description: 'Instead of giving direct answers, the AI tutor poses guiding questions. This encourages you to think critically and explore the problem from different angles.',
    },
    {
      icon: <IconThink />,
      title: 'Uncover Assumptions',
      description: 'The Socratic dialogue helps you identify and challenge your own assumptions, leading to a more robust and deeper understanding of the core concepts.',
    },
    {
      icon: <IconDiscover />,
      title: 'Discover Through Dialogue',
      description: 'Learning becomes an active, two-way conversation. By engaging with the AI, you construct your own knowledge and arrive at the solution yourself.',
    },
  ];

  return (
    <div className="learn-more-page">
      <motion.div
        className="learn-content-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 className="learn-title" variants={itemVariants}>
          The Socratic Method
        </motion.h1>
        <motion.p className="learn-subtitle" variants={itemVariants}>
          Learning by asking. Not by being told.
        </motion.p>

        <motion.div
          className="socratic-steps-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socraticSteps.map((step, index) => (
            <motion.div className="socratic-step-card" key={index} variants={itemVariants}>
              <div className="card-icon">{step.icon}</div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link to="/" className="go-back-btn">
            Go Back
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LearnMore;