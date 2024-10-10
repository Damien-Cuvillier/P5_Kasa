import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { DataContext } from '../components/DataProvider';
import Slideshow from '../components/Slideshow/Slideshow';
import Accordion from '../components/Collapse/Accordion';
import Tags from '../components/Tags/Tags';
import Author from '../components/Author/Author';
import TitleAndLocation from '../components/TitleAndLocation/TitleAndLocation';
import Rating from '../components/Rating/Rating';
import './HousingDetails.scss';

function HousingDetails() {
  // Utilisation du hook useParams pour obtenir l'ID de l'URL
  const { id } = useParams();
  // Utilisation du hook useContext pour obtenir les données du DataContext
  const { listings } = useContext(DataContext);

  // Recherche de la location correspondant à l'ID
  const rental = listings.find((rental) => String(rental.id) === String(id));

  // Si la location n'est pas trouvée, afficher un message d'erreur
  if (!rental) return <Navigate to="/NotFound"/>;

  return (
    <div className="housing-details">
      <Slideshow pictures={rental.pictures} />
      <div className='block'>
        <TitleAndLocation title={rental.title} location={rental.location} />
        <Author host={rental.host} />
      </div>
      <div className="Tag-and-Rating">
        <Tags tags={rental.tags} />
        <Rating className="rating" rating={rental.rating} />
      </div>
      <div className='housing-accordion'>
        <Accordion className="description" title="Description" content={rental.description} />
        <Accordion className="equipements" title="Équipements" content={rental.equipments} isList />
      </div>
    </div>
  );
}

export default HousingDetails;
