import React from 'react';
import './Banner.scss'; // Importez les styles SCSS

function Banner({ image, title }) {
  return (
    <section className="banner">
      <img src={image} alt="Banner" className="banner-image" />
      {title && <h1 className="banner-title">{title}</h1>}
    </section>
  );
}

export default Banner;
