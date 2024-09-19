import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { DataContext } from '../components/DataProvider';

function Details() {
  const { id } = useParams();
  const { listings } = useContext(DataContext);
  const listing = listings.find(item => item.id === id);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div>
      <Header />
      <main>
        <h1>{listing.title}</h1>
        {/* Afficher d'autres détails */}
      </main>
    </div>
  );
}

export default Details;
