// Importation des modules nécessaires depuis React et React Router
import React from 'react';
import { Link } from 'react-router-dom'; 
import './NotFound.scss'; // Importation du fichier de styles SCSS

// Définition du composant fonctionnel NotFound
function NotFound() {
  return (
    <div> 
      {/* Conteneur principal du composant */}
      <main>
        {/* Titre de la page 404 */}
        <h1>404</h1>
        {/* Message d'erreur informant l'utilisateur que la page demandée n'existe pas */}
        <p>Oups! La page que vous demandez n'existe pas.</p> 
        {/* Lien de redirection vers la page d'accueil */}
        <Link to="/" className="home-button">
          Retourner sur la page d'accueil
        </Link>
      </main>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application
export default NotFound;
