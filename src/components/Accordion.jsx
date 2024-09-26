// src/components/Accordion.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Accordion.scss';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
}

export default Accordion;
