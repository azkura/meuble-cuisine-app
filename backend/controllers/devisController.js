const Devis = require('../models/devisModel');

// Créer un nouveau devis
const createDevis = async (req, res) => {
  try {
    const { nom, dateDecision, budget, notes, statut } = req.body;
    const devis = new Devis({ nom, dateDecision, budget, notes, statut });
    const createdDevis = await devis.save();
    res.status(201).json(createdDevis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir tous les devis
const getAllDevis = async (req, res) => {
  try {
    const devisList = await Devis.find({});
    res.status(200).json(devisList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mettre à jour un devis
const updateDevis = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDevis = await Devis.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedDevis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un devis
const deleteDevis = async (req, res) => {
  const { id } = req.params;
  try {
    await Devis.findByIdAndDelete(id);
    res.status(200).json({ message: 'Devis supprimé' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createDevis,
  getAllDevis,
  updateDevis,
  deleteDevis,
};
