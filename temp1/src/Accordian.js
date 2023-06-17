import React, { useState } from 'react';
import "C:/Users/amitg/OneDrive/Documents/GitHub/hackathonWebsite/temp1/src/Accordian.css";

const Accordion = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="accordion-container">
      <button className={`accordion-title ${isExpanded ? 'expanded' : ''}`} onClick={handleToggle}>
        <span className="title1">{title}</span>
        <span className="symbol1">{isExpanded ? '-' : '+'}</span>
      </button>
      {isExpanded && (
        <div className="accordion-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;