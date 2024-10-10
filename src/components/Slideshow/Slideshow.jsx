import React, { useState } from 'react';
import './Slideshow.scss';

// Définition du composant fonctionnel Slideshow avec une prop 'pictures'
function Slideshow({ pictures }) {
  // Définition de l'état local 'currentIndex' avec la valeur initiale 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Fonction pour revenir à la diapositive précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  // Vérifier si la liste des images contient plus d'une image
  const hasMultiplePictures = pictures.length > 1;

  return (
    <div className="slideshow">
      {/* Affichage de l'image courante */}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      
      {/* Afficher les boutons seulement s'il y a plus d'une image */}
      {hasMultiplePictures && (
        <>
          <button onClick={prevSlide} className="prev-button">❮</button>
          <button onClick={nextSlide} className="next-button">❯</button>
        </>
      )}
      
      {/* Afficher la numérotation seulement s'il y a plus d'une image */}
      {hasMultiplePictures && (
        <div className="slide-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
