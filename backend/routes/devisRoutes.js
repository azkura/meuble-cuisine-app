const express = require('express');
const { createDevis, getAllDevis, updateDevis, deleteDevis } = require('../controllers/devisController');
const router = express.Router();

// Route pour obtenir tous les devis et créer un nouveau devis
router.route('/').get(getAllDevis).post(createDevis);

// Route pour mettre à jour et supprimer un devis par ID
router.route('/:id').put(updateDevis).delete(deleteDevis);

module.exports = router;
