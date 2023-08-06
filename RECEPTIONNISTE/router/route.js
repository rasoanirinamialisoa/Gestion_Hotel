const express = require('express');
const insertReceptionist = require('../controllers/insertReceptionist');

const loginReceptionnist = require('../controllers/loginController')

const crudClient = require('../controllers/crudClient');

const reservationController = require('../controllers/crudReservationController');

const roomController = require('../controllers/crudRoomController');

const medium3Controller = require('../controllerExecut/medium3Controller')

const router = express.Router();
const path = require('path');

// Route pour exécuter la requête
router.put('/execute-query', medium3Controller.executeQuery);

// Utilisation du contrôleur pour la route '/submit'
router.post('/submit', insertReceptionist.submitForm);

router.post('/login', loginReceptionnist.login);

// Endpoint pour obtenir tous les clients depuis la base de données
router.get('/client', crudClient.getClients);

// Route pour obtenir un client par son ID
router.get('/client/:id_client', crudClient.getClientById);

// Route pour ajouter un nouveau client
router.post('/submitClient', crudClient.addClient);

// Route pour mettre à jour un client
router.put('/client/:id_client', crudClient.updateClient);


// Route pour supprimer un client
router.delete('/client/:id_client', crudClient.deleteClient);

// Route pour obtenir la liste de toutes les réservations
router.get('/reservation', reservationController.getReservations);

// Route pour obtenir une réservation par son ID
router.get('/reservation/:id_reservation', reservationController.getReservationById);

// Route pour ajouter une nouvelle réservation
router.post('/reservation', reservationController.addReservation);

// Route pour mettre à jour une réservation
router.put('/reservation/:id_reservation', reservationController.updateReservation);

// Route pour supprimer une réservation
router.delete('/reservation/:id_reservation', reservationController.deleteReservation);

// Route pour obtenir la liste de toutes les chambres
router.get('/room', roomController.getRooms);

// Route pour obtenir une chambre par son ID
router.get('/room/:id_room', roomController.getRoomById);

// Route pour ajouter une nouvelle chambre
router.post('/room', roomController.addRoom);

// Route pour mettre à jour une chambre
router.put('/room/:id_room', roomController.updateRoom);

// Route pour supprimer une chambre
router.delete('/room/:id_room', roomController.deleteRoom);

module.exports = router;

