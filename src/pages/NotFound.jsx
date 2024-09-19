import React from 'react';
import { Link } from 'react-router-dom'; 
import './NotFound.scss';

function NotFound() {
  return (
    <div> 
      <main>
        <h1>404</h1>
        <p> Oups! La page que vous demandez n'existe pas.</p> 
        <Link to="/" className="home-button">
        Retourner sur la page d'accueil
      </Link>
      </main>
    </div>
  );
}

export default NotFound;
