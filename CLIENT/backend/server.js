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
  
  // Vérifier si le pool de connexion est connecté
  pool.connect((err, client, release) => {
    if (err) {
      console.error('Erreur lors de l\'obtention du client depuis le pool de connexion', err);
      return;
    }
    console.log('Connecté à la base de données PostgreSQL !');
    release(); // Relâcher le client
  });
  