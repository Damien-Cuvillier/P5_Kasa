// Importation des modules nécessaires depuis React
import React from 'react';

// Importation des composants nécessaires
import Banner from '../components/Banner/Banner';
import Accordion from '../components/Collapse/Accordion';

// Importation du fichier de styles SCSS
import './About.scss';

// Importation de l'image de la bannière
import bannerImage from '../assets/banner2.png';

// Définition du composant fonctionnel About
function About() {
  // Définition des catégories avec leurs titres et contenus
  const categories = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content: 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
    },
    {
      title: 'Sécurité',
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
  ];

  // Rendu du composant avec la bannière et les accordéons pour chaque catégorie
  return (
    <div className="about-page">
      {/* Affichage de la bannière avec une image */}
      <Banner image={bannerImage} />
      <main>
        {/* Affichage des accordéons pour chaque catégorie */}
        {categories.map((category, index) => (
          <Accordion key={index} title={category.title} content={category.content} />
        ))}
      </main>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application
export default About;
