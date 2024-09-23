import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';

function HousingDetails() {
  const { id } = useParams();
  const rental = data.find((item) => item.id === id);

  if (!rental) {
    return <div>Location non trouvée</div>;
  }

  return (
    <div>
      <h1>{rental.title}</h1>
      <img src={rental.cover} alt={rental.title} />
      <p>{rental.description}</p>
      {/* Ajoutez d'autres détails que vous souhaitez afficher */}
    </div>
  );
}

export default HousingDetails;
