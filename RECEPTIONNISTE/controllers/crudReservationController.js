const db = require('../db');

// Fonction pour obtenir toutes les réservations depuis la base de données
const getReservations = (req, res) => {
  const query = 'SELECT * FROM reservation';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des réservations:', err);
      res.sendStatus(500);
    } else {
      res.json(results.rows);
    }
  });
};

// Fonction pour obtenir une réservation par son ID
const getReservationById = (req, res) => {
  const reservationId = req.params.id_reservation;
  const query = 'SELECT * FROM reservation WHERE id_reservation = $1';
  db.query(query, [reservationId], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération de la réservation:', err);
      res.send({
        error: true,
        message: err.message
      });
    } else {
      if (results.rows.length === 1) {
        res.json(results.rows[0]);
      } else {
        res.send("No data found for reservation ID:", req.params.id_reservation);
      }
    }
  });
};

// Fonction pour mettre à jour une réservation dans la base de données
const updateReservation = (req, res) => {
  const id_reservation = req.params.id_reservation;
  const { date_arrived, leaving_date, number_of_person, is_cancelled } = req.body;
  const query = 'UPDATE reservation SET date_arrived = $1, leaving_date = $2, number_of_person = $3, is_cancelled = $4 WHERE id_reservation = $5';
  db.query(query, [date_arrived, leaving_date, number_of_person, is_cancelled, id_reservation], (err, results) => {
    if (err) {
      console.error('Erreur lors de la mise à jour de la réservation:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

// Fonction pour ajouter une nouvelle réservation à la base de données
const addReservation = (req, res) => {
  const { date_arrived, leaving_date, number_of_person, is_cancelled } = req.body;
  const query = 'INSERT INTO reservation (date_arrived, leaving_date, number_of_person, is_cancelled) VALUES ($1, $2, $3, $4)';
  db.query(query, [date_arrived, leaving_date, number_of_person, is_cancelled], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'ajout de la réservation:', err);
      res.sendStatus(500);
    } else {
      res.redirect('/pages/allBook.html');
    }
  });
};

// Fonction pour supprimer une réservation de la base de données
const deleteReservation = (req, res) => {
  const id_reservation = req.params.id_reservation;
  const query = 'DELETE FROM reservation WHERE id_reservation = $1';
  db.query(query, [id_reservation], (err, results) => {
    if (err) {
      console.error('Erreur lors de la suppression de la réservation:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = {
  getReservations,
  getReservationById,
  updateReservation,
  addReservation,
  deleteReservation,
};
