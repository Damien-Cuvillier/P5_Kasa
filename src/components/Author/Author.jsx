import React from 'react';
import './Author.scss';

// Définition du composant fonctionnel Author
function Author({ host }) {
  // Décomposition du nom de l'hôte en prénom et nom de famille
  const [firstName, lastName] = host.name.split(' ');

  return (
    <div className="author-info">
      <div className="author-name">
        {/* Affichage du prénom et du nom de famille de l'auteur */}
        <p className="author-firstname">{firstName}</p>
        <p className="author-lastname">{lastName}</p>
      </div>
      {/* Affichage de l'image de l'auteur */}
      <img src={host.picture} alt={host.name} className="author-picture" />
    </div>
  );
}

export default Author;
