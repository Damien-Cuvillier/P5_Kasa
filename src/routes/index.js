import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importation des composants de React Router pour gérer la navigation
import Home from '../pages/Home';
import About from '../pages/About'; 
import PageNotFound from '../pages/NotFound';
import HousingDetails from '../pages/HousingDetails';
import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer'; 

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

export default AppRouter;
