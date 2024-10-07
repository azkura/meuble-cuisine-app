// src/components/Modal.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Modal({ isOpen, onClose, onAddDevis }) {
  const [devis, setDevis] = useState({ nom: '', statut: 'en cours' });

  const handleChange = (e) => {
    setDevis({ ...devis, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAddDevis(devis);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Ajouter un Devis</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="nom"
          label="Nom du Devis"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="statut"
          label="Statut"
          fullWidth
          onChange={handleChange}
          value={devis.statut}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Annuler
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
