import React, { useState, useMemo } from 'react';
import { Box, Typography, TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import DevisTable from '../components/DevisTable';

function DevisPage() {
  const [devisList, setDevisList] = useState([]);
  const [filterStatut, setFilterStatut] = useState('');
  const [filterMonth, setFilterMonth] = useState(''); // Filtre par mois
  const [sortCriteria, setSortCriteria] = useState('');
  const [search, setSearch] = useState('');

  // Fonction pour ajouter un devis
  const handleAddDevis = (newDevis) => {
    setDevisList((prevList) => [...prevList, newDevis]);
  };

  // Fonction pour modifier un devis
  const handleEditDevis = (updatedDevis) => {
    setDevisList((prevList) =>
      prevList.map((devis) => (devis.id === updatedDevis.id ? updatedDevis : devis))
    );
  };

  // Fonction pour supprimer un devis
  const handleDeleteDevis = (devisToDelete) => {
    setDevisList((prevList) => prevList.filter((devis) => devis.id !== devisToDelete.id));
  };

  // Filtrage des devis par statut et par mois
  const filteredDevis = useMemo(() => {
    return devisList.filter((devis) => {
      const dateDecision = new Date(devis.dateDecision);
      const devisMonth = dateDecision.getMonth(); // Mois de la date de décision (0 = janvier)

      // Appliquer le filtre par statut et par mois
      const matchesStatut = !filterStatut || devis.statut === filterStatut;
      const matchesMonth = !filterMonth || devisMonth === parseInt(filterMonth, 10);

      return matchesStatut && matchesMonth;
    });
  }, [devisList, filterStatut, filterMonth]);

  // Tri des devis
  const sortedDevis = useMemo(() => {
    if (!sortCriteria) return filteredDevis;
    return [...filteredDevis].sort((a, b) => {
      if (sortCriteria === 'date') {
        return new Date(a.dateDecision) - new Date(b.dateDecision);
      } else if (sortCriteria === 'budget') {
        return a.budget - b.budget;
      }
      return 0;
    });
  }, [filteredDevis, sortCriteria]);

  // Gestion de la recherche
  const searchedDevis = useMemo(() => {
    return sortedDevis.filter((devis) =>
      devis.nom.toLowerCase().includes(search.toLowerCase())
    );
  }, [sortedDevis, search]);

  return (
    <Box p={3}>
      <Typography variant="h4">Gestion des Devis</Typography>

      {/* Filtres et options de tri */}
      <Box my={2} display="flex" justifyContent="space-between" flexWrap="wrap">
        <FormControl style={{ minWidth: 200 }}>
          <InputLabel id="filter-statut-label">Filtrer par Statut</InputLabel>
          <Select
            labelId="filter-statut-label"
            value={filterStatut}
            onChange={(e) => setFilterStatut(e.target.value)}
            label="Filtrer par Statut"
          >
            <MenuItem value="">Tous</MenuItem>
            <MenuItem value="en cours">En cours</MenuItem>
            <MenuItem value="validé">Validé</MenuItem>
            <MenuItem value="refusé">Refusé</MenuItem>
          </Select>
        </FormControl>

        {/* Filtre par mois */}
        <FormControl style={{ minWidth: 200 }}>
          <InputLabel id="filter-month-label">Filtrer par Mois</InputLabel>
          <Select
            labelId="filter-month-label"
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
            label="Filtrer par Mois"
          >
            <MenuItem value="">Tous les mois</MenuItem>
            <MenuItem value="0">Janvier</MenuItem>
            <MenuItem value="1">Février</MenuItem>
            <MenuItem value="2">Mars</MenuItem>
            <MenuItem value="3">Avril</MenuItem>
            <MenuItem value="4">Mai</MenuItem>
            <MenuItem value="5">Juin</MenuItem>
            <MenuItem value="6">Juillet</MenuItem>
            <MenuItem value="7">Août</MenuItem>
            <MenuItem value="8">Septembre</MenuItem>
            <MenuItem value="9">Octobre</MenuItem>
            <MenuItem value="10">Novembre</MenuItem>
            <MenuItem value="11">Décembre</MenuItem>
          </Select>
        </FormControl>

        {/* Tri */}
        <FormControl style={{ minWidth: 200 }}>
          <InputLabel id="sort-criteria-label">Trier par</InputLabel>
          <Select
            labelId="sort-criteria-label"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
            label="Trier par"
          >
            <MenuItem value="">Aucun</MenuItem>
            <MenuItem value="date">Date de décision</MenuItem>
            <MenuItem value="budget">Budget</MenuItem>
          </Select>
        </FormControl>

        {/* Barre de recherche */}
        <TextField
          label="Recherche par nom"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ minWidth: 300 }}
        />
      </Box>

      {/* Table des devis */}
      <DevisTable
        devisList={searchedDevis}
        onAdd={handleAddDevis}
        onEdit={handleEditDevis}
        onDelete={handleDeleteDevis}
      />
    </Box>
  );
}

export default DevisPage;
