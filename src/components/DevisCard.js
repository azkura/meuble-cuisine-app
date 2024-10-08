import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function DevisCard({ devis }) {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {devis.nom}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Statut: {devis.statut}
        </Typography>
        <Box>
          <Typography variant="body2">Montant: {devis.montant} €</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DevisCard;
