import React, { useContext } from 'react';
import Banner from '../components/Banner';
import RentalCard from '../components/RentalCard';
import './Home.scss';
import { DataContext } from '../components/DataProvider';
import bannerImage from '../assets/banner.png';
import RentalList from '../components/RentalList';

function Home() {
  const { listings } = useContext(DataContext); // Utilisez le contexte

  return (
    <div className="home">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <div className="rental-container">
      <RentalList />
        {listings.map((rental) => (
          <RentalCard
            key={rental.id}
            image={rental.cover}
            title={rental.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
