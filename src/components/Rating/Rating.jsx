// Importation de la bibliothèque React
import React from 'react';
// Importation de l'icône FontAwesome pour les étoiles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importation du fichier de styles pour le composant Rating
import './Rating.scss';

// Définition du composant fonctionnel Rating qui prend une prop 'rating'
function Rating({ rating }) {
  return (
    // Conteneur principal pour l'affichage des étoiles
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

// Exportation du composant Rating pour pouvoir l'utiliser dans d'autres parties de l'application
export default Rating;
