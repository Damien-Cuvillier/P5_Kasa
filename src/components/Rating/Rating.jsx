// src/components/Rating.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Rating.scss';

function Rating({ rating }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon="star"
          className={`star ${index < rating ? 'star-filled' : 'star-empty'}`}
        />
      ))}
    </div>
  );
}

export default Rating;
