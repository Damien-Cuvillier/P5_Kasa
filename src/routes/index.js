// Importation des bibliothèques et des composants nécessaires
import React from 'react'; // Importation de React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importation des composants de React Router pour gérer la navigation

// Importation des pages
import Home from '../pages/Home'; // Page d'accueil
import About from '../pages/About'; // Page "À propos"
import PageNotFound from '../pages/NotFound'; // Page 404 pour les routes non trouvées
import HousingDetails from '../pages/HousingDetails'; // Page de détails du logement

// Importation des composants de la structure de l'application
import Header from '../components/Header/Header'; // Composant d'en-tête
import Footer from '../components/Footer/Footer'; // Composant de pied de page

// Définition du composant AppRouter qui gère les routes de l'application
function AppRouter() {
  return (
    // Utilisation de Router pour englober toute l'application et gérer la navigation
    <Router>
      {/* Header est placé en haut, donc il s'affiche sur toutes les pages */}
      <Header />
      
      {/* Définition des différentes routes de l'application */}
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Route pour la page "À propos" */}
        <Route path="/about" element={<About />} />
        {/* Route pour les détails d'un logement spécifique, avec un paramètre ID */}
        <Route path="/housing/:id" element={<HousingDetails />} />
        {/* Route pour toutes les autres URL (page 404) */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
      {/* Footer est placé en bas, donc il s'affiche sur toutes les pages */}
      <Footer />
    </Router>
  );
}

// Exportation du composant AppRouter pour qu'il puisse être utilisé dans d'autres parties de l'application
export default AppRouter;
