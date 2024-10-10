import React, { useState } from 'react';
import './Slideshow.scss';

// Définition du composant fonctionnel Slideshow avec une prop 'pictures'
function Slideshow({ pictures }) {
  // Définition de l'état local 'currentIndex' avec la valeur initiale 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Fonction pour revenir à la diapositive précédente
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slideshow">
      {/* Affichage de l'image courante */}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      
      {/* Bouton pour la diapositive précédente, affiché seulement si currentIndex > 0 */}
      {currentIndex > 0 && (
        <button onClick={prevSlide} className="prev-button">❮</button>
      )}
      
      {/* Bouton pour la diapositive suivante, affiché seulement si currentIndex < pictures.length - 1 */}
      {currentIndex < pictures.length - 1 && (
        <button onClick={nextSlide} className="next-button">❯</button>
      )}
      
      {/* Affichage du compteur de diapositives */}
      <div className="slide-counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
