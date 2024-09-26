import React, { useState } from 'react';
import './Slideshow.scss';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      {currentIndex > 0 && (
        <button onClick={prevSlide} className="prev-button">❮</button>
      )}
      {currentIndex < pictures.length - 1 && (
        <button onClick={nextSlide} className="next-button">❯</button>
      )}
      <div className="slide-counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
