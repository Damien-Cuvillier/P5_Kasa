import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from './DataProvider';

function HousingDetails() {
  const { id } = useParams();
  const { listings } = useContext(DataContext);
  const rental = listings.find((rental) => String(rental.id) === String(id));
 
  if (!rental) return <div>Location non trouvée</div>;

  return (
    <div className="housing-details">
      <h1>{rental.title}</h1>
      <img src={rental.cover} alt={rental.title} />
      {/* Ajoutez d'autres détails ici */}
    </div>
  );
}
export default HousingDetails;
