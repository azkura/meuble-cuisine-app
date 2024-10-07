// src/pages/Devis.js
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import DevisTable from '../components/DevisTable';

function Devis() {
  const [devisList, setDevisList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { nomClient: 'Client 1', statut: 'En cours', date: '2024-01-01' },
        { nomClient: 'Client 2', statut: 'Vendu', date: '2024-01-05' },
      ];
      setDevisList(data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Liste des Devis
      </Typography>
      <DevisTable devis={devisList} />
    </Container>
  );
}

export default Devis;
