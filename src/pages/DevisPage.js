import React, { useState } from 'react';
import DevisTable from '../components/DevisTable';

function DevisPage() {
  const [devisList, setDevisList] = useState([]);

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

  return (
    <div>
      <h1>Liste des Devis</h1>
      <DevisTable
        devisList={devisList}
        onAdd={handleAddDevis}
        onEdit={handleEditDevis}
        onDelete={handleDeleteDevis}
      />
    </div>
  );
}

export default DevisPage;
