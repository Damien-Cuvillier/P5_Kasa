import React from 'react';
import './Footer.scss'; 
import logo from '../../assets/logo-black.png';

// Définition du composant fonctionnel Footer
function Footer() {
  return (
    <footer className="footer">
      {/* Affichage du logo de Kasa avec une hauteur de 50px */}
      <img src={logo} className="footer-logo" alt="Kasa Logo" style={{ height: '50px' }} />
      {/* Affichage du texte des droits d'auteur */}
      <p className="footer-text">2020 Kusa All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
