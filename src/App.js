// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import Devis from './pages/Devis';
import Ventes from './pages/Ventes';
import Suivi from './pages/Suivi';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/ventes" element={<Ventes />} />
          <Route path="/suivi" element={<Suivi />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
