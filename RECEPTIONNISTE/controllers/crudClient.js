const db = require('../db');

// Fonction pour obtenir tous les clients depuis la base de données
const getClients = (req, res) => {
  const query = 'SELECT * FROM client';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des clients:', err);
      res.sendStatus(500);
    } else {
      res.json(results.rows);
    }
  });
};

// Fonction pour obtenir un client par son ID
const getClientById = (req, res) => {
  const clientId = req.params.id;
  const query = 'SELECT * FROM client WHERE id_client = $1';
  db.query(query, [clientId], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération du client:', err);
      res.sendStatus(500);
    } else {
      if (results.rows.length === 1) {
        res.json(results.rows[0]);
      } else {
        res.sendStatus(404);
      }
    }
  });
};

// Fonction pour mettre à jour un client dans la base de données
const updateClient = (req, res) => {
  const id_client = req.params.id_client;
  const { name, last_name, principal_contact, address, emergency_number, gender, cin, email } = req.body;
  const query = 'UPDATE client SET name = $1, last_name = $2, principal_contact = $3, address = $4, emergency_number = $5, gender = $6, cin = $7, email = $8 WHERE id_client = $9';
  db.query(query, [name, last_name, principal_contact, address, emergency_number, gender, cin, email, id_client], (err, results) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du client:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

// Fonction pour ajouter un nouveau client à la base de données
const addClient = (req, res) => {
  const { name, last_name, principal_contact, address, emergency_number, gender, cin, email } = req.body;
  const query = 'INSERT INTO client (name, last_name, principal_contact, address, emergency_number, gender, cin, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
  db.query(query, [name, last_name, principal_contact, address, emergency_number, gender, cin, email], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'ajout du client:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

// Fonction pour supprimer un client de la base de données
const deleteClient = (req, res) => {
  const id_client = req.params.id_client;
  const query = 'DELETE FROM client WHERE id_client = $1';
  db.query(query, [id_client], (err, results) => {
    if (err) {
      console.error('Erreur lors de la suppression du client:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = {
  getClients,
  getClientById,
  updateClient,
  addClient,
  deleteClient,
};
