import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Slideshow from './components/Slideshow';

function HousingDetails() {
  const { id } = useParams();
  const rental = data.find((item) => item.id === id);

  if (!rental) return <div>Location non trouvée</div>;

  return (
    <div className="housing-details">
      <Slideshow pictures={rental.pictures} />
      <h1>{rental.title}</h1>
      <p>{rental.description}</p>
      {/* Ajoutez d'autres détails ici */}
    </div>
  );
}

export default HousingDetails;
