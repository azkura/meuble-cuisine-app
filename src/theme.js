import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Couleur principale pour les boutons, liens, etc.
    },
    secondary: {
      main: '#dc004e', // Couleur secondaire pour les éléments d'accent.
    },
    custom: {
      navbar: '#C19A6B',  // Couleur camel clair pour le navbar.
      footer: '#C19A6B',  // Couleur camel clair pour le footer.
      enCours: '#FFCA28', // Couleur jaune pour le statut "En cours".
      vendu: '#4CAF50',   // Couleur verte pour le statut "Vendu".
      perdu: '#F44336',   // Couleur rouge pour le statut "Perdu".
    },
  },
  typography: {
    h4: {
      fontWeight: 700,     // Poids de la police pour les titres h4.
    },
    body1: {
      fontSize: '1.2rem',  // Taille par défaut pour le texte principal.
    },
  },
});

export default theme;
