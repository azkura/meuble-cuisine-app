import React from 'react';
import { Button, Box, TextField } from '@mui/material';

function Controls({ onAdd, onSearch }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
      <TextField
        sx={{ flexGrow: 1, mr: 2 }}
        label="Recherche"
        variant="outlined"
        onChange={onSearch}
      />
      <Button variant="contained" color="primary" onClick={onAdd}>
        Ajouter
      </Button>
    </Box>
  );
}

export default Controls;
