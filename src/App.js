// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import DevisPage from './pages/DevisPage';
import SuiviPage from './pages/SuiviPage';
import VentesPage from './pages/VentesPage';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/devis" element={<DevisPage />} />
            <Route path="/ventes" element={<VentesPage />} />
            <Route path="/suivi" element={<SuiviPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
