import React from 'react';
import './Footer.scss'; // Importez les styles SCSS
import logo from '../../assets/logo-black.png';
function Footer() {
  return (
    <footer className="footer">
      <img src={logo} className="footer-logo" alt="Kasa Logo" style={{ height: '50px' }} /> {/* Ajoutez l'image */}
      <p className="footer-text">2020 Kusa All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
