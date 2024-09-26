import React from 'react';
import './Author.scss';

function Author({ title, location, host }) {
  // On suppose que le nom est formaté comme "Prénom Nom"
  const [firstName, lastName] = host.name.split(' ');

  return (
    <div className='title-location-author'>
      <div className="housing-title-author">
        <h1 className="housing-title">{title}</h1>
        <div className="author-info">
          <div className="author-name">
            <p className="author-firstname">{firstName}</p>
            <p className="author-lastname">{lastName}</p>
          </div>
          <img src={host.picture} alt={host.name} className="author-picture" />
        </div>
      </div>
      <p className="location">{location}</p>
    </div>
  );
}

export default Author;
