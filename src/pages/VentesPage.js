// src/pages/VentesPage.js
import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// Exemple de données fictives pour les ventes
const ventesData = [
  {
    id: 1,
    client: 'Jean Dupont',
    dateVente: '2024-10-01',
    montantTTC: 1500,
    statut: 'livré',
  },
  {
    id: 2,
    client: 'Marie Curie',
    dateVente: '2024-09-15',
    montantTTC: 2200,
    statut: 'en attente',
  },
  {
    id: 3,
    client: 'Pierre Durand',
    dateVente: '2024-08-22',
    montantTTC: 1750,
    statut: 'livré',
  },
];

function VentesPage() {
  const [ventes, setVentes] = useState(ventesData); // Gestion des données de vente

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Liste des Ventes
      </Typography>

      {/* Tableau des ventes */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Date de Vente</TableCell>
              <TableCell>Montant TTC (€)</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ventes.map((vente) => (
              <TableRow key={vente.id}>
                <TableCell>{vente.client}</TableCell>
                <TableCell>{vente.dateVente}</TableCell>
                <TableCell>{vente.montantTTC}</TableCell>
                <TableCell>{vente.statut}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                    Détails
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default VentesPage;
