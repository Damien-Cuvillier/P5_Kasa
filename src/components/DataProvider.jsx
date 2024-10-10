import React, { createContext, useState, useEffect } from 'react';
import data from '../data/data.json';
// Création du contexte de données
export const DataContext = createContext();

// Définition du composant DataProvider, fournit les données à ses enfants
function DataProvider({ children }) {
  // Déclaration d'un état local pour les annonces (listings)
  const [listings, setListings] = useState([]);

  // Utilisation du hook useEffect pour charger les données au montage du composant
  useEffect(() => {
    // Mise à jour de l'état listings avec les données importées
    setListings(data);
  }, []);

  return (
    <DataContext.Provider value={{ listings }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
