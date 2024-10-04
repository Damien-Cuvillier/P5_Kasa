// Importation de la bibliothèque React
import React from 'react';
// Importation de Link depuis react-router-dom pour gérer la navigation
import { Link } from 'react-router-dom';
// Importation du fichier de styles pour le composant RentalCard
import './RentalCard.scss';

// Définition du composant fonctionnel RentalCard avec des props pour l'id, l'image et le titre
function RentalCard({ id, image, title }) {
  return (
    // Conteneur principal de la carte de location avec la classe CSS 'rental-card'
    <div className="rental-card">
      {/* Lien qui redirige vers la page des détails de la location, utilisant l'ID pour la route */}
      <Link to={`/housing/${id}`}>
        {/* Image de la location avec une description alternative basée sur le titre */}
        <img src={image} alt={title} className="rental-image" />
        {/* Titre de la location */}
        <h2 className="rental-title">{title}</h2>
      </Link>
    </div>
  );
}

// Exportation du composant RentalCard pour pouvoir l'utiliser dans d'autres parties de l'application
export default RentalCard;
