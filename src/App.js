// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import Devis from './pages/Devis';
import Ventes from './pages/Ventes';
import Suivi from './pages/Suivi';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D2B48C', // Camel clair
    },
    custom: {
      navbar: '#D2B48C', // Camel clair pour la navbar
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/ventes" element={<Ventes />} />
          <Route path="/suivi" element={<Suivi />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
