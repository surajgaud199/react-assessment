import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      <div
        className="accordion-body"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
