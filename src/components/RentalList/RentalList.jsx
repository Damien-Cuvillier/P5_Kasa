// Importation de la bibliothèque React et du hook useContext
import React, { useContext } from 'react';
// Importation du composant RentalCard
import RentalCard from '../RentalCard/RentalCard';
// Importation du contexte de données
import { DataContext } from '../DataProvider';
// Importation du fichier de styles pour la liste de locations
import './RentalList.scss';

// Définition du composant fonctionnel RentalList
function RentalList() {
  // Récupération des 'listings' depuis le DataContext
  const { listings } = useContext(DataContext);

  return (
    // Conteneur principal de la liste de locations avec la classe CSS 'rental-list'
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

// Exportation du composant RentalList pour pouvoir l'utiliser dans d'autres parties de l'application
export default RentalList;
