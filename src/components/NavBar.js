import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function NavBar() {
  const theme = useTheme();

  return (
    <AppBar position="static" style={{ backgroundColor: theme?.palette?.custom?.navbar || '#defaultColor' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Gestion des Devis
        </Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/devis">Devis</Button>
        <Button color="inherit" component={Link} to="/ventes">Ventes</Button>
        <Button color="inherit" component={Link} to="/suivi">Suivi</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
