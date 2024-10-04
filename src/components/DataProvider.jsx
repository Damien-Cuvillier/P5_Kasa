// Importation des modules nécessaires depuis React
import React, { createContext, useState, useEffect } from 'react';

// Importation des données à partir d'un fichier JSON
import data from '../data/data.json';

// Création du contexte de données
export const DataContext = createContext();

// Définition du composant DataProvider qui va fournir les données à ses enfants
function DataProvider({ children }) {
  // Déclaration d'un état local pour les annonces (listings)
  const [listings, setListings] = useState([]);

  // Utilisation du hook useEffect pour charger les données au montage du composant
  useEffect(() => {
    // Mise à jour de l'état listings avec les données importées
    setListings(data);
  }, []);

  // Rendu du composant DataContext.Provider avec les annonces en valeur
  return (
    <DataContext.Provider value={{ listings }}>
      {children}
    </DataContext.Provider>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application
export default DataProvider;
