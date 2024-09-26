import React from 'react';
import Banner from '../components/Banner/Banner';
import './Home.scss';
import bannerImage from '../assets/banner.png';
import RentalList from '../components/RentalList/RentalList';

function Home() {
 
  return (
    <div className="home">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <div className="rental-container">
      <RentalList />
      </div>
    </div>
  );
}

export default Home;
