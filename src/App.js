import React from 'react'; 
import AppRouter from './routes'; // Importation du composant AppRouter pour gérer les routes de l'application
import DataProvider from './components/DataProvider'; // Import du composant DataProvider pour fournir des données via le contexte
import './Fontawesome';

// Définition du composant principal de l'application
function App() {
  return (
    // Utilisation du DataProvider pour envelopper l'application, fournit les données via le contexte à tous les composants enfants
    <DataProvider>
      <div className="App">
        {/* AppRouter gère les différentes routes de l'application, permettant la navigation entre les pages */}
        <AppRouter />
      </div>
    </DataProvider>
  );
}

export default App;
