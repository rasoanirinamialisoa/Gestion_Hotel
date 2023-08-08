const express = require('express');
const router = express.Router();

// Configuration de la connexion à la base de données
const { Pool } = require('pg');
const pool = new Pool({
  user: 'rotsy',
  host: 'localhost',
  database: 'gestion_hotel',
  password: 'rotsy123',
  port: 5432, // ou le port que vous avez configuré pour PostgreSQL
});

// Gestion des erreurs de connexion à la base de données
pool.on('error', (err) => {
  console.error('Erreur lors de la connexion à la base de données', err);
});

// Route pour le login
router.post('/login', (req, res) => {
  const { Email, Password } = req.body;

  // Vérification des informations d'identification dans la base de données
  // Exemple : requête pour vérifier l'utilisateur dans la table client
  const query = {
    text: 'SELECT * FROM client WHERE Email = $1 AND Password = $2',
    values: [Email, Password],
  };

  pool.query(query)
    .then(result => {
      // Vérifier si l'utilisateur existe dans la base de données
      if (result.rows.length === 1) {
        // L'utilisateur est authentifié avec succès
        res.json({ message: 'Connexion réussie !' });
      } else {
        // L'utilisateur n'a pas été trouvé dans la base de données
        res.status(401).json({ message: 'Identifiants incorrects.' });
      }
    })
    .catch(error => {
      console.error('Erreur lors de la vérification des informations d\'identification', error);
      res.status(500).json({ message: 'Erreur serveur lors de la vérification des informations d\'identification.' });
    });
});

module.exports = router;
