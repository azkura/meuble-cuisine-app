// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.custom.footer,
        color: 'white',
        p: 2,
        mt: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">© 2024 Gestion des Devis. Tous droits réservés.</Typography>
    </Box>
  );
}

export default Footer;
