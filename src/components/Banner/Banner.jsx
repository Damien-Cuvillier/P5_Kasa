// Importation de la bibliothèque React
import React from 'react';
// Importation des styles SCSS pour le composant Banner
import './Banner.scss';

// Définition du composant fonctionnel Banner
function Banner({ image, title }) {
  return (
    <section className="banner">
      {/* Affichage de l'image de la bannière */}
      <img src={image} alt="Banner" className="banner-image" />
      {/* Si un titre est fourni, il est affiché */}
      {title && <h1 className="banner-title">{title}</h1>}
    </section>
  );
}

// Exportation du composant Banner pour pouvoir l'utiliser dans d'autres parties de l'application
export default Banner;
