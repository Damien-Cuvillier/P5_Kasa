import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png'; // Importez l'image
import './Header.scss';

function Header() {
  return (
    <header>
     <img src={logo} alt="Kasa Logo" style={{ height: '50px' }} /> {/* Ajoutez l'image */}
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
