import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import DevisTable from '../components/DevisTable';
import Controls from '../components/Controls';

function DevisPage() {
  const [devisList, setDevisList] = useState([
    { id: 1, nom: 'Devis A', statut: 'en cours', montant: 5000 },
    { id: 2, nom: 'Devis B', statut: 'vendu', montant: 3000 },
  ]);

  const handleAddDevis = () => {
    const newDevis = { id: Date.now(), nom: 'Nouveau Devis', statut: 'en cours', montant: 0 };
    setDevisList([...devisList, newDevis]);
  };

  return (
    <Box>
      <Typography variant="h4">Liste des Devis</Typography>
      <Controls onAdd={handleAddDevis} />
      <DevisTable devisList={devisList} />
    </Box>
  );
}

export default DevisPage;
