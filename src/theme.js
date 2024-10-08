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
});

export default theme;
