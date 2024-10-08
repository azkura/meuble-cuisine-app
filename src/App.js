import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DevisPage from './pages/DevisPage';
import SuiviPage from './pages/SuiviPage';
import VentesPage from './pages/VentesPage';
import AppLayout from './layouts/AppLayout';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/devis" element={<DevisPage />} />
          <Route path="/suivi" element={<SuiviPage />} />
          <Route path="/ventes" element={<VentesPage />} /> {/* Route vers la page des ventes */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
