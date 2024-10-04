// Importation des modules nécessaires depuis React
import React from 'react';

// Importation des composants nécessaires
import Banner from '../components/Banner/Banner';

// Importation du fichier de styles SCSS
import './Home.scss';

// Importation de l'image de la bannière
import bannerImage from '../assets/banner.png';

// Importation du composant RentalList
import RentalList from '../components/RentalList/RentalList';

// Définition du composant fonctionnel Home
function Home() {
  // Rendu du composant avec la bannière et la liste des locations
  return (
    <div className="home">
      {/* Affichage de la bannière avec une image et un titre */}
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <div className="rental-container">
        {/* Affichage de la liste des locations */}
        <RentalList />
      </div>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application
export default Home;
