import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Rating.scss';

// Définition du composant fonctionnel Rating qui prend une prop 'rating'
function Rating({ rating }) {
  return (
    <div className="rating">
      {/* Création d'un tableau de 5 éléments pour représenter les étoiles */}
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
          key={index} // Utilisation de l'index comme clé unique pour chaque étoile
          icon="star" // Icône d'étoile FontAwesome
          className={`star ${index < rating ? 'star-filled' : 'star-empty'}`} // Classe dynamique pour remplir ou non l'étoile
        />
      ))}
    </div>
  );
}

export default Rating;
