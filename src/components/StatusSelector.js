import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function StatusSelector({ status, onChange }) {
  const theme = useTheme();

  // Fonction pour déterminer la couleur du statut
  const getStatusColor = (statut) => {
    switch (statut) {
      case 'en cours':
        return theme.palette.warning.main; // Couleur pour "en cours"
      case 'validé':
        return theme.palette.success.main; // Couleur pour "validé"
      case 'refusé':
        return theme.palette.error.main; // Couleur pour "refusé"
      default:
        return theme.palette.text.primary; // Couleur par défaut
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="status-label">Statut</InputLabel>
      <Select
        labelId="status-label"
        id="status"
        value={status}
        label="Statut"
        onChange={onChange}
        style={{ color: getStatusColor(status) }}  // Application de la couleur au texte
      >
        <MenuItem value="en cours" style={{ color: theme.palette.warning.main }}>En cours</MenuItem>
        <MenuItem value="validé" style={{ color: theme.palette.success.main }}>Validé</MenuItem>
        <MenuItem value="refusé" style={{ color: theme.palette.error.main }}>Refusé</MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusSelector;
