const express = require('express');
const insertReceptionist = require('../controllers/insertReceptionist');
const loginReceptionnist = require('../controllers/loginController')
const crudClient = require('../controllers/crudClient');

const reservationController = require('../controllers/crudReservationController');
const roomController = require('../controllers/crudRoomController');

const medium3Controller = require('../controllerExecut/medium3Controller');

const basic7 = require('../controllerExecut/basic7Controller');
const basic3 = require('../controllerExecut/basic3Controller');

const basic6 = require('../controllerExecut/basic6Controller');


const router = express.Router();
const path = require('path');

// Route pour exécuter la requête
router.post('/execute-query', medium3Controller.executeQuery);

// Route pour exécuter la requête
router.post('/execute-query2', basic3.getBookRecente);

// Route pour exécuter la requête
router.post('/execute-query-3', basic7.getClientPaid);

const generalController = require('../controllerExecut/generalController');
router.get('/execute-query-4', generalController.basic2);
router.get('/execute-query-5', generalController.medium4);
router.get('/execute-query-6', generalController.basic71);
router.get('/execute-query-7', generalController.basic72);
router.get('/execute-query-8', generalController.basic81);
router.post('/execute-query-9', generalController.basic9);
router.post('/execute-query-10', generalController.basic10);
router.get('/execute-query-11', generalController.medium8);
router.get('/execute-query-12', generalController.medium9);
router.get('/execute-query-13', generalController.medium7);


// Route pour exécuter la requête
router.post('/execute-query-6', basic6.getReservationsForClient);

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
router.post('/submitBook', reservationController.addReservation);

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

