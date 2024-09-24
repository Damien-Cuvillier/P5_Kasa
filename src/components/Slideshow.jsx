import React, { useState } from 'react';
import './Slideshow.scss';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <button className="prev" onClick={prevSlide}>
          &#10094; {/* Flèche gauche */}
        </button>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {pictures.length > 1 && (
        <button className="next" onClick={nextSlide}>
          &#10095; {/* Flèche droite */}
        </button>
      )}
      {pictures.length > 1 && (
        <div className="slide-number">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
