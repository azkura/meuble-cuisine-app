import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function DevisForm({ devis, onSave, onClose }) {
  const [formValues, setFormValues] = useState(devis || { nom: '', dateDecision: '', budget: '', notes: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={3} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Nom"
        name="nom"
        value={formValues.nom}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Date de Décision"
        name="dateDecision"
        type="date"
        value={formValues.dateDecision}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        label="Budget"
        name="budget"
        type="number"
        value={formValues.budget}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Notes"
        name="notes"
        value={formValues.notes}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
      />
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button type="submit" variant="contained" color="primary">Sauvegarder</Button>
        <Button variant="outlined" onClick={onClose}>Annuler</Button>
      </Box>
    </Box>
  );
}

export default DevisForm;
                                                                                                                                        