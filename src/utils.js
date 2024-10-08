// src/utils.js
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  // pour calculer la taxe
export const calculateTax = (priceHT, taxRate) => {
    return priceHT * (taxRate / 100);
  };

  // Fonction pour calculer le prix TTC en fonction de la TVA et du prix HT
export const calculateTTC = (priceHT, tva) => {
    return priceHT + priceHT * (tva / 100);
  };

  // Fonction pour formater les devis en euros
export const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  };
  
export const calculateTotalPriceTTC = (priceHT, taxRate) => {
    return priceHT + calculateTax(priceHT, taxRate);
  };
  
// Fonction pour trier les devis par date
export const sortByDate = (devis) => {
    return devis.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  
export const sortDevisByDate = (devis) => {
    return devis.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // Fonction pour filtrer les devis par statut
export const filterByStatus = (devis, status) => {
    return devis.filter((devis) => devis.statut === status);
  };

// src/utils.js
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  