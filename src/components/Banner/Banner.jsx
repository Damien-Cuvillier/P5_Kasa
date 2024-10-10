import React from 'react';
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

export default Banner;
