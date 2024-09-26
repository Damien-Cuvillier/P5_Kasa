// src/components/Accordion.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './Accordion.scss';

function Accordion({ title, content, isList }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          className={`accordion-icon ${isOpen ? 'open' : ''}`}
          icon={faAngleUp}
        />
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {isList ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Accordion;
