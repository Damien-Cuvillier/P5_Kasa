// src/components/Header/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.png'; // Importez l'image
import './Header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa Logo" style={{ height: '50px' }} /> {/* Ajoutez l'image */}
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
