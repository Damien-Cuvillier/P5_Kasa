// src/components/HousingDetails.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../components/DataProvider';
import Slideshow from '../components/Slideshow/Slideshow';
import Accordion from '../components/Collapse/Accordion';
import Tags from '../components/Tags/Tags';
import Author from '../components/Author/Author';
import Rating from '../components/Rating/Rating';
import './HousingDetails.scss';

function HousingDetails() {
  const { id } = useParams();
  const { listings } = useContext(DataContext);

  const rental = listings.find((rental) => String(rental.id) === String(id));

  if (!rental) return <div>Location non trouvée</div>;

  return (
    <div className="housing-details">
      <Slideshow pictures={rental.pictures} />
      <Author title={rental.title} location={rental.location} author={rental.name} />
      <div className="Tag-and-Rating">
        <Tags tags={["Cosy", "Canal", "Paris 10"]} />
        <Rating className="rating" rating={rental.rating} />
      </div>
      <div className='housing-accordion'>
        <Accordion className="description" title="Description" content={rental.description} />
        <Accordion className="equipements" title="Équipements" content={rental.equipments.join(', ')} />
      </div>
    </div>
  );
}

export default HousingDetails;
