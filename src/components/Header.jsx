import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png'; // Importez l'image


function Header() {
  return (
    <header>
     <img src={logo} alt="Kasa Logo" style={{ height: '50px' }} /> {/* Ajoutez l'image */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
