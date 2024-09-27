// src/components/Author.jsx
import React from 'react';
import './Author.scss';

function Author({ host }) {
  const [firstName, lastName] = host.name.split(' ');

  return (
    <div className="author-info">
      <div className="author-name">
        <p className="author-firstname">{firstName}</p>
        <p className="author-lastname">{lastName}</p>
      </div>
      <img src={host.picture} alt={host.name} className="author-picture" />
    </div>
  );
}

export default Author;
