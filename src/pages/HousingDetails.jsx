// Importation des modules nécessaires depuis React et React Router
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../components/DataProvider';

// Importation des composants nécessaires
import Slideshow from '../components/Slideshow/Slideshow';
import Accordion from '../components/Collapse/Accordion';
import Tags from '../components/Tags/Tags';
import Author from '../components/Author/Author';
import TitleAndLocation from '../components/TitleAndLocation/TitleAndLocation'; // Import du nouveau composant
import Rating from '../components/Rating/Rating';

// Importation du fichier de styles SCSS
import './HousingDetails.scss';

// Définition du composant fonctionnel HousingDetails
function HousingDetails() {
  // Utilisation du hook useParams pour obtenir l'ID de l'URL
  const { id } = useParams();
  // Utilisation du hook useContext pour obtenir les données du contexte DataContext
  const { listings } = useContext(DataContext);

  // Recherche de la location correspondant à l'ID
  const rental = listings.find((rental) => String(rental.id) === String(id));

  // Si la location n'est pas trouvée, afficher un message d'erreur
  if (!rental) return <div>Location non trouvée</div>;

  // Rendu du composant avec les détails de la location
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

// Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application
export default HousingDetails;
