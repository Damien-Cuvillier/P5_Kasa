// Importation de la bibliothèque React
import React from 'react';
// Importation de NavLink depuis react-router-dom pour la navigation
import { NavLink } from 'react-router-dom';
// Importation de l'image du logo
import logo from '../../assets/LOGO.png'; // Importez l'image
// Importation du fichier de styles pour le composant Header
import './Header.scss';

// Définition du composant fonctionnel Header
function Header() {
  return (
    // Élément header contenant le logo et la navigation
    <header>
      {/* Affichage du logo de Kasa avec une hauteur de 50px */}
      <img src={logo} className="header-logo" alt="Kasa Logo" style={{ height: '50px' }} />
      <nav>
        {/* Lien vers la page d'accueil, avec la classe 'active-link' si le lien est actif */}
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>Accueil</NavLink>
        {/* Lien vers la page À Propos, avec la classe 'active-link' si le lien est actif */}
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>A Propos</NavLink>
      </nav>
    </header>
  );
}

// Exportation du composant Header pour pouvoir l'utiliser dans d'autres parties de l'application
export default Header;
