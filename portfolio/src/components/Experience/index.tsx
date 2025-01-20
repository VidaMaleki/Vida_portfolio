import React, { useState } from 'react'
import ExCard from './ExCard';
import { experiences } from '../../assets/experience_data';
import './Experience.css';

export const Experience = () => {
    const [visibleCount, setVisibleCount] = useState(3); // Number of cards to show
  const [isExpanded, setIsExpanded] = useState(false); // Toggle between "See More" and "See Less"

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(3); // Reset to show only the first 3 cards
    } else {
      setVisibleCount(experiences.length); // Show all cards
    }
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <div className="experience-container">
      <h1>Professional Experience</h1>
      <div className="experience-grid">
        {experiences.slice(0, visibleCount).map((experience, index) => (
          <ExCard key={index} {...experience} />
        ))}
      </div>
      <button onClick={handleToggle} className="toggle-btn">
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};
export default Experience;
