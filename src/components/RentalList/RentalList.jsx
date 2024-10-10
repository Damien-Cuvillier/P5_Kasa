import React, { useContext } from 'react';
import RentalCard from '../RentalCard/RentalCard';
// Importation du contexte de données
import { DataContext } from '../DataProvider';
import './RentalList.scss';

// Définition du composant fonctionnel RentalList
function RentalList() {
  // Récupération des 'listings' depuis le DataContext
  const { listings } = useContext(DataContext);

  return (
    <div className="rental-list">
      {/* Itération sur chaque location dans 'listings' pour afficher une carte de location */}
      {listings.map((rental) => {
        return (
          // Composant RentalCard pour chaque location, avec des props pour l'identifiant, l'image et le titre
          <RentalCard 
            key={rental.id}  // Clé unique pour chaque élément de la liste
            id={rental.id}  // ID de la location
            image={rental.cover}  // Image de couverture de la location
            title={rental.title}  // Titre de la location
          />
        );
      })}
    </div>
  );
}

export default RentalList;
