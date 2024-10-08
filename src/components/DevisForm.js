// src/components/DevisForm.js
import React, { useState, useEffect } from 'react';
import { Button, DialogActions, DialogContent, TextField } from '@mui/material';
import StatusSelector from './StatusSelector'; // Importation du StatusSelector

function DevisForm({ devis, onSave, onClose }) {
  const [formData, setFormData] = useState({
    nom: '',
    dateDecision: '',
    budget: '',
    notes: '',
    statut: 'en cours', // Par défaut, le statut est "en cours"
  });

  useEffect(() => {
    if (devis) {
      setFormData(devis);
    }
  }, [devis]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatusChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      statut: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Sauvegarde du devis avec les informations du formulaire
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="nom"
          name="nom"
          label="Nom"
          type="text"
          fullWidth
          value={formData.nom}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="dateDecision"
          name="dateDecision"
          label="Date de décision"
          type="date"
          fullWidth
          value={formData.dateDecision}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          id="budget"
          name="budget"
          label="Budget"
          type="number"
          fullWidth
          value={formData.budget}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="notes"
          name="notes"
          label="Notes"
          type="text"
          fullWidth
          multiline
          rows={3}
          value={formData.notes}
          onChange={handleChange}
        />
        {/* Insertion du StatusSelector */}
        <StatusSelector status={formData.statut} onChange={handleStatusChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Annuler
        </Button>
        <Button type="submit" color="primary">
          Sauvegarder
        </Button>
      </DialogActions>
    </form>
  );
}

export default DevisForm;
