import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import PageNotFound from '../pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HousingDetails from '../components/HousingDetails';


function AppRouter() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} /> {/* Route 404 */}
        <Route path="/housing/:id" element={<HousingDetails />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default AppRouter;
