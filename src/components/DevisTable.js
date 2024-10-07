// src/components/DevisTable.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

function DevisTable({ devis }) {
  if (!devis || !Array.isArray(devis) || devis.length === 0) {
    return <div>Aucun devis à afficher</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom du client</TableCell>
            <TableCell>Statut</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {devis.map((devisItem, index) => (
            <TableRow key={index}>
              <TableCell>{devisItem.nomClient}</TableCell>
              <TableCell>{devisItem.statut}</TableCell>
              <TableCell>{devisItem.date}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" style={{ marginRight: '8px' }}>
                  Modifier
                </Button>
                <Button variant="contained" color="secondary">
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DevisTable;
