// src/pages/Dashboard.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Dashboard() {
  return (
    <Box p={3}>
      <Typography variant="h4">Tableau de bord</Typography>
      
      {/* Placeholder for the graphical statistics */}
      <Box mt={3}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6">Graphique et fonctionnalités à venir...</Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default Dashboard;
