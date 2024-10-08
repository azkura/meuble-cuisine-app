import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function StatusSelector({ status, onStatusChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel>Statut</InputLabel>
      <Select value={status} onChange={onStatusChange}>
        <MenuItem value="en cours">En cours</MenuItem>
        <MenuItem value="vendu">Vendu</MenuItem>
        <MenuItem value="perdu">Perdu</MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusSelector;
