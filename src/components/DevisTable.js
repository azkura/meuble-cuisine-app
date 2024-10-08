import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import DevisForm from './DevisForm';
import Notification from './Notification';

function DevisTable({ devisList, onEdit, onDelete, onAdd }) {
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });
  const [selectedDevis, setSelectedDevis] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openNotesDialog, setOpenNotesDialog] = useState(false);
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
      onAdd(devis); 
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

  // Ouvrir la boîte de dialogue pour afficher les notes du devis
  const handleOpenNotesDialog = (devis) => {
    setSelectedDevis(devis);
    setOpenNotesDialog(true);
  };

  const handleCloseNotesDialog = () => {
    setOpenNotesDialog(false);
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
                  <TableCell>
                    {devis.nom}
                    {/* Bouton Info pour afficher les notes */}
                    <Tooltip title="Afficher les notes">
                      <IconButton
                        size="small"
                        onClick={() => handleOpenNotesDialog(devis)}
                        style={{ marginLeft: '10px' }}
                      >
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{devis.dateDecision}</TableCell>
                  <TableCell>{devis.budget}</TableCell>
                  <TableCell>{devis.statut}</TableCell> {/* Affiche seulement le statut */}
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
      <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DevisForm
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

      {/* Boîte de dialogue pour afficher les notes du devis */}
      <Dialog
        open={openNotesDialog}
        onClose={handleCloseNotesDialog}
      >
        <DialogTitle>Notes pour {selectedDevis?.nom}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedDevis?.notes || 'Aucune note disponible.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNotesDialog} color="primary">
            Fermer
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
