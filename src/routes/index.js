import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
