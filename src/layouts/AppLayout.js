// src/layouts/AppLayout.js
import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function AppLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default AppLayout;
