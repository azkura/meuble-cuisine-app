const mongoose = require('mongoose');

const devisSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  dateDecision: {
    type: Date,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
  statut: {
    type: String,
    enum: ['en cours', 'validé', 'refusé'],
    default: 'en cours',
  },
}, {
  timestamps: true,
});

const Devis = mongoose.model('Devis', devisSchema);

module.exports = Devis;
