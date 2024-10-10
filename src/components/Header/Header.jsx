import React from 'react';
// Importation de NavLink depuis react-router-dom pour la navigation
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import './Header.scss';

// Définition du composant fonctionnel Header
function Header() {
  return (
    <header>
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

export default Header;
