import React from 'react';
import RentalCard from './RentalCard';
import data from '../data/data.json'; 
import './RentalList.scss';

function RentalList() {
  return (
    <div className="rental-list">
      {data.map((rental) => {
        return (
          <RentalCard 
            key={rental.id} 
            title={rental.title} 
            image={rental.cover} 
            id={rental.id} // Ajoutez cette ligne
          />
        );
      })}
    </div>
  );
}

export default RentalList;
