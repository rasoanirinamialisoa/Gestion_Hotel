const db = require('../db');

// Fonction pour obtenir toutes les chambres depuis la base de données
const getRooms = (req, res) => {
  const query = 'SELECT * FROM room';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des chambres:', err);
      res.sendStatus(500);
    } else {
      res.json(results.rows);
    }
  });
};

// Fonction pour obtenir une chambre par son ID
const getRoomById = (req, res) => {
  const roomId = req.params.id;
  const query = 'SELECT * FROM room WHERE id_room = $1';
  db.query(query, [roomId], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération de la chambre:', err);
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

// Fonction pour mettre à jour une chambre dans la base de données
const updateRoom = (req, res) => {
  const id_room = req.params.id_room;
  const { number, room_type, capacity_room } = req.body;
  const query = 'UPDATE room SET number = $1, room_type = $2, capacity_room = $3 WHERE id_room = $4';
  db.query(query, [number, room_type, capacity_room, id_room], (err, results) => {
    if (err) {
      console.error('Erreur lors de la mise à jour de la chambre:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

// Fonction pour ajouter une nouvelle chambre à la base de données
const addRoom = (req, res) => {
  const { number, room_type, capacity_room } = req.body;
  const query = 'INSERT INTO room (number, room_type, capacity_room) VALUES ($1, $2, $3)';
  db.query(query, [number, room_type, capacity_room], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'ajout de la chambre:', err);
      res.sendStatus(500);
    } else {
      res.redirect('/pages/allRoom.html');
    }
  });
};

// Fonction pour supprimer une chambre de la base de données
const deleteRoom = (req, res) => {
  const id_room = req.params.id_room;
  const query = 'DELETE FROM room WHERE id_room = $1';
  db.query(query, [id_room], (err, results) => {
    if (err) {
      console.error('Erreur lors de la suppression de la chambre:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = {
  getRooms,
  getRoomById,
  updateRoom,
  addRoom,
  deleteRoom,
};
