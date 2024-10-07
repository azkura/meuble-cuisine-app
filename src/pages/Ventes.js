// src/pages/Ventes.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Ventes() {
  return (
    <Box p={3}>
      <Typography variant="h4">Gestion des Ventes</Typography>
      {/* Placeholder for the sales list */}
      <Box mt={3}>
        <Typography>Liste des clients passés au statut de vente...</Typography>
      </Box>
    </Box>
  );
}

export default Ventes;
