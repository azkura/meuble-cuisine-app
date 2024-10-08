import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function StatusSelector({ devis, onChange }) {
  const theme = useTheme();

  const getStatusColor = (statut) => {
    switch (statut) {
      case 'en cours':
        return theme.palette.custom.enCours;
      case 'vendu':
        return theme.palette.custom.vendu;
      case 'perdu':
        return theme.palette.custom.perdu;
      default:
        return '#000000';
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Statut</InputLabel>
      <Select
        value={devis.statut}
        onChange={(e) => onChange(e.target.value)}
        style={{ color: getStatusColor(devis.statut) }}
      >
        <MenuItem value="en cours" style={{ color: theme.palette.custom.enCours }}>
          En cours
        </MenuItem>
        <MenuItem value="vendu" style={{ color: theme.palette.custom.vendu }}>
          Vendu
        </MenuItem>
        <MenuItem value="perdu" style={{ color: theme.palette.custom.perdu }}>
          Perdu
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusSelector;
