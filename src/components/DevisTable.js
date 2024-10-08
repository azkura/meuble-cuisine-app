import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DevisCard from './DevisCard';

function DevisTable({ devisList }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Statut</TableCell>
            <TableCell>Montant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {devisList.map((devis) => (
            <TableRow key={devis.id}>
              <TableCell>{devis.nom}</TableCell>
              <TableCell>{devis.statut}</TableCell>
              <TableCell>{devis.montant} €</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DevisTable;
