// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 'auto' }} component="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        © 2024 Votre Entreprise. Tous droits réservés.
      </Typography>
    </Box>
  );
};

export default Footer;
