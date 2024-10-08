import React, { useState, useEffect } from 'react';
import { DialogContent, DialogActions, TextField, Button } from '@mui/material';

function DevisCard({ devis, onSave, onClose }) {
  const [formValues, setFormValues] = useState({
    nom: '',
    dateDecision: '',
    budget: '',
    notes: '',
  });

  useEffect(() => {
    if (devis) {
      setFormValues({
        nom: devis.nom || '',
        dateDecision: devis.dateDecision || '',
        budget: devis.budget || '',
        notes: devis.notes || '',
      });
    }
  }, [devis]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(formValues); // Sauvegarder les informations du devis
  };

  return (
    <>
      <DialogContent>
        <TextField
          margin="dense"
          name="nom"
          label="Nom"
          fullWidth
          value={formValues.nom}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="dateDecision"
          label="Date de décision"
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formValues.dateDecision}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="budget"
          label="Budget"
          fullWidth
          type="number"
          value={formValues.budget}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="notes"
          label="Notes"
          fullWidth
          multiline
          rows={3}
          value={formValues.notes}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Annuler
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Sauvegarder
        </Button>
      </DialogActions>
    </>
  );
}

export default DevisCard;
