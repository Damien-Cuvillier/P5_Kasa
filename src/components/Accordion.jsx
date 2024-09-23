import React, { useState, useRef, useEffect } from 'react';
import './Accordion.scss';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </div>
      <div ref={contentRef} className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
}

export default Accordion;
