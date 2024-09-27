// src/components/TitleAndLocation.jsx
import React from 'react';
import './TitleAndLocation.scss';

function TitleAndLocation({ title, location }) {
  return (
    <div className="title-location">
      <h1 className="housing-title">{title}</h1>
      <p className="location">{location}</p>
    </div>
  );
}

export default TitleAndLocation;
