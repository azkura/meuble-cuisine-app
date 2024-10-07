// src/components/Controls.js
import React from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './Controls.css';

const Controls = ({ onAdd, onFilterChange, onSortChange }) => {
  return (
    <div className="controls">
      <FormControl className="control-item">
        <InputLabel>Filtrer</InputLabel>
        <Select onChange={(e) => onFilterChange(e.target.value)} defaultValue="">
          <MenuItem value="">Tous</MenuItem>
          <MenuItem value="en cours">En cours</MenuItem>
          <MenuItem value="vendu">Vendu</MenuItem>
          <MenuItem value="perdu">Perdu</MenuItem>
        </Select>
      </FormControl>

      <FormControl className="control-item">
        <InputLabel>Trier</InputLabel>
        <Select onChange={(e) => onSortChange(e.target.value)} defaultValue="">
          <MenuItem value="nom">Nom</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={onAdd} className="control-item">
        Ajouter
      </Button>
    </div>
  );
};

export default Controls;
