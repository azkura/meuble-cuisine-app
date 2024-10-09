const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const devisRoutes = require('./routes/devisRoutes');
require('dotenv').config();

const app = express();

// Connexion à la base de données
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Pour parser les requêtes JSON

// Routes
app.use('/api/devis', devisRoutes);

// Serveur en écoute
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
