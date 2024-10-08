// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    custom: {
      navbar: '#C19A6B',  // Couleur camel clair pour le navbar
      footer: '#C19A6B',  // Couleur camel clair pour le footer
    },
    primary: {
      main: '#4CAF50', // Couleur principale pour les boutons, etc.
    },
    secondary: {
      main: '#FF5722', // Couleur secondaire pour les éléments d'accent
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.2rem',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    custom: {
      enCours: '#FFCA28', // jaune
      vendu: '#4CAF50', // vert
      perdu: '#F44336', // rouge
    },
  },
});

export default theme;
