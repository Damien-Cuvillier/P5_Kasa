// Import des bibliothèques et des composants nécessaires
import React from 'react'; // Import de React
import AppRouter from './routes'; // Importation du composant AppRouter pour gérer les routes de l'application
import DataProvider from './components/DataProvider'; // Import du composant DataProvider pour fournir des données via le contexte
import './Fontawesome'; // Import de la configuration FontAwesome pour les icônes

// Définition du composant principal de l'application
function App() {
  return (
    // Utilisation du DataProvider pour envelopper l'application, fournissant ainsi des données via le contexte à tous les composants enfants
    <DataProvider>
      <div className="App">
        {/* AppRouter gère les différentes routes de l'application, permettant la navigation entre les pages */}
        <AppRouter />
      </div>
    </DataProvider>
  );
}

// Exportation du composant App pour qu'il puisse être utilisé dans d'autres parties de l'application
export default App;
