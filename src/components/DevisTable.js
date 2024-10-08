// src/components/DevisTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { formatPrice, calculateTTC } from '../utils';

function DevisTable({ devis }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Prix HT</TableCell>
            <TableCell>TVA</TableCell>
            <TableCell>Prix TTC</TableCell>
            <TableCell>Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {devis.map((devisItem) => (
            <TableRow key={devisItem.id}>
              <TableCell>{devisItem.nom}</TableCell>
              <TableCell>{new Date(devisItem.date).toLocaleDateString()}</TableCell>
              <TableCell>{formatPrice(devisItem.prixHT)}</TableCell>
              <TableCell>{devisItem.tva}%</TableCell>
              <TableCell>{formatPrice(calculateTTC(devisItem.prixHT, devisItem.tva))}</TableCell>
              <TableCell>{devisItem.statut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DevisTable;
