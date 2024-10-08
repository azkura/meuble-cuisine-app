// src/pages/DevisPage.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import DevisTable from '../components/DevisTable';

const devisData = [
  { id: 1, nom: 'Devis 1', date: '2024-01-15', prixHT: 1000, tva: 20, statut: 'En cours' },
  { id: 2, nom: 'Devis 2', date: '2024-02-10', prixHT: 2000, tva: 20, statut: 'Vendu' },
  // autres devis...
];

function DevisPage() {
  return (
    <Box p={3}>
      <Typography variant="h4">Liste des Devis</Typography>
      <DevisTable devis={devisData} />
    </Box>
  );
}

export default DevisPage;
