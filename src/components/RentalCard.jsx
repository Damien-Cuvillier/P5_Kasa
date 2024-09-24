import React from 'react';
import { Link } from 'react-router-dom';
import './RentalCard.scss';

function RentalCard({ id, image, title }) {
  return (
    <div className="rental-card">
      <Link to={`/housing/${id}`}>
        <img src={image} alt={title} className="rental-image" />
        <h2 className="rental-title">{title}</h2>
      </Link>
    </div>
  );
}

export default RentalCard;
