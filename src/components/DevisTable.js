import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog
} from '@mui/material';
import DevisCard from './DevisCard';
import Notification from './Notification';

function DevisTable({ devisList, onEdit, onDelete, onAdd }) {
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });
  const [selectedDevis, setSelectedDevis] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenNewDevisModal = () => {
    setSelectedDevis(null);
    setIsModalOpen(true);
  };

  const handleEdit = (devis) => {
    setSelectedDevis(devis);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveDevis = (devis) => {
    if (selectedDevis) {
      onEdit(devis);
      setNotification({
        open: true,
        message: `Le devis ${devis.nom} a été modifié avec succès.`,
        severity: 'success',
      });
    } else {
      onAdd(devis);  // Assurez-vous que `onAdd` est passé depuis le parent
      setNotification({
        open: true,
        message: `Le devis ${devis.nom} a été créé avec succès.`,
        severity: 'success',
      });
    }
    setIsModalOpen(false);
  };

  const handleDelete = (devis) => {
    onDelete(devis);
    setNotification({
      open: true,
      message: `Le devis ${devis.nom} a été supprimé avec succès.`,
      severity: 'error',
    });
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: '', severity: '' });
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenNewDevisModal}>
        Nouveau Devis
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Date de décision</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devisList.length > 0 ? (
              devisList.map((devis) => (
                <TableRow key={devis.id}>
                  <TableCell>{devis.nom}</TableCell>
                  <TableCell>{devis.dateDecision}</TableCell>
                  <TableCell>{devis.budget}</TableCell>
                  <TableCell>{devis.statut}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleEdit(devis)}>
                      Modifier
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(devis)}>
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Aucun devis trouvé.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DevisCard
          devis={selectedDevis}
          onSave={handleSaveDevis}
          onClose={handleCloseModal}
        />
      </Dialog>

      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={handleCloseNotification}
      />
    </>
  );
}

export default DevisTable;
