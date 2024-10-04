// Importation de la bibliothèque React
import React from 'react';
// Importation des styles SCSS pour le composant Footer
import './Footer.scss'; // Importez les styles SCSS
// Importation de l'image du logo
import logo from '../../assets/logo-black.png';

// Définition du composant fonctionnel Footer
function Footer() {
  return (
    // Élément footer contenant le logo et le texte des droits d'auteur
    <footer className="footer">
      {/* Affichage du logo de Kasa avec une hauteur de 50px */}
      <img src={logo} className="footer-logo" alt="Kasa Logo" style={{ height: '50px' }} />
      {/* Affichage du texte des droits d'auteur */}
      <p className="footer-text">2020 Kusa All Rights Reserved</p>
    </footer>
  );
}

// Exportation du composant Footer pour pouvoir l'utiliser dans d'autres parties de l'application
export default Footer;
