import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from './DataProvider';
import Slideshow from './Slideshow';
import Accordion from './Accordion'; // Assurez-vous d'importer votre composant Accordion
import './HousingDetails.scss';

function HousingDetails() {
  const { id } = useParams();
  const { listings } = useContext(DataContext);

  const rental = listings.find((rental) => String(rental.id) === String(id));

  if (!rental) return <div>Location non trouvée</div>;

  return (
    <div className="housing-details">
      {/* Carrousel d'images */}
      <Slideshow pictures={rental.pictures} />

      {/* Titre de la location */}
      <h1 className="housing-title">{rental.title}</h1>
      {/* Localisation */}
      <div className='loc-&-author'>
        <p className="location">{rental.location}</p>
        <p className="author">{rental.name}</p> {/* Auteur du post */}
      </div>
      {/* Boutons et évaluation */}
      <div className="buttons-and-rating">
        <button className="button">Cosy</button>
        <button className="button">Canal</button>
        <button className="button">Paris 10</button>
        <div className="rating">
          {Array.from({ length: rental.rating }, (_, index) => (
            <span key={index} className="star">⭐</span> // Utilisez un symbole ou une icône pour les étoiles
          ))}
        </div>
      </div>

      {/* Accordion pour les catégories déroulantes */}
      <div className='housing-accordion'>
        <Accordion className="description" title="Description" content={rental.description} />
        <Accordion className="equipements" title="Équipements" content={rental.equipments.join(', ')} />
      </div>
    </div>
  );
}

export default HousingDetails;
