import React, { useContext } from 'react';
import RentalCard from '../RentalCard/RentalCard';
import { DataContext } from '../DataProvider';
import './RentalList.scss';

function RentalList() {
  const { listings } = useContext(DataContext);

  return (
    <div className="rental-list">
      
      {listings.map((rental) => {
  return (
    <RentalCard 
      key={rental.id} 
      id={rental.id} 
      image={rental.cover} 
      title={rental.title} 
    />
  );
})}
    </div>
  );
}


export default RentalList;
