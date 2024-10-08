import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import DevisCard from './DevisCard';
import Notification from './Notification';

function DevisTable({ devisList, onEdit, onDelete, onAdd }) {
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });
  const [selectedDevis, setSelectedDevis] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [devisToDelete, setDevisToDelete] = useState(null);

  // Ouvrir la modal pour un nouveau devis
  const handleOpenNewDevisModal = () => {
    setSelectedDevis(null);
    setIsModalOpen(true);
  };

  // Ouvrir la modal pour modifier un devis
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

  // Ouvrir la boîte de dialogue de suppression
  const handleOpenDeleteDialog = (devis) => {
    setDevisToDelete(devis);
    setOpenDeleteDialog(true);
  };

  // Fermer la boîte de dialogue de suppression
  const handleCloseDeleteDialog = () => {
    setDevisToDelete(null);
    setOpenDeleteDialog(false);
  };

  // Confirmer et effectuer la suppression
  const handleConfirmDelete = () => {
    onDelete(devisToDelete);
    setNotification({
      open: true,
      message: `Le devis ${devisToDelete.nom} a été supprimé avec succès.`,
      severity: 'error',
    });
    setOpenDeleteDialog(false);
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
                    <Button variant="contained" color="secondary" onClick={() => handleOpenDeleteDialog(devis)}>
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

      {/* Modal pour l'ajout ou la modification d'un devis */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DevisCard
          devis={selectedDevis}
          onSave={handleSaveDevis}
          onClose={handleCloseModal}
        />
      </Dialog>

      {/* Boîte de dialogue de confirmation de suppression */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
      >
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer le devis "{devisToDelete?.nom}" ? Cette action est irréversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Annuler
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Supprimer
          </Button>
        </DialogActions>
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
