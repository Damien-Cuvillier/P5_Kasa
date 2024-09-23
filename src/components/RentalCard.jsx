import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RentalCard.scss'; // Importez les styles SCSS

function RentalCard({ image, title, id }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/housing/${id}`);
  };

  return (
    <div className="rental-card" onClick={handleCardClick}>
      <img src={image} alt={title} className="rental-image" />
      <h2 className="rental-title">{title}</h2>
    </div>
  );
}

export default RentalCard;
