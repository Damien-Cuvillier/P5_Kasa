import React from 'react';
import Banner from '../components/Banner/Banner';
import './Home.scss';
import bannerImage from '../assets/banner.png';
import RentalList from '../components/RentalList/RentalList';

// Définition du composant fonctionnel Home
function Home() {
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

export default Home;
