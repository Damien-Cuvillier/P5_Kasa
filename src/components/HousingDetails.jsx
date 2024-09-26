import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from './DataProvider';
import Slideshow from './Slideshow';
import Accordion from './Accordion';
import './HousingDetails.scss';
import Tags from './Tags';
import Author from './Author';
import Rating from './Rating';

function HousingDetails() {
  const { id } = useParams();
  const { listings } = useContext(DataContext);

  const rental = listings.find((rental) => String(rental.id) === String(id));

  if (!rental) return <div>Location non trouvée</div>;

  return (
    <div className="housing-details">
      <Slideshow pictures={rental.pictures} />
      <Author title={rental.title} location={rental.location} author={rental.name} />
      <Tags tags={["Cosy", "Canal", "Paris 10"]} />
      <Rating rating={rental.rating} />
      <div className='housing-accordion'>
        <Accordion className="description" title="Description" content={rental.description} />
        <Accordion className="equipements" title="Équipements" content={rental.equipments.join(', ')} />
      </div>
    </div>
  );
}

export default HousingDetails;
