const express = require('express');
const insertReceptionist = require('../controllers/insertReceptionist');
const loginReceptionnist = require('../controllers/loginController')
const crudClient = require('../controllers/crudClient');
const router = express.Router();
const path = require('path');

// Utilisation du contrôleur pour la route '/submit'
router.post('/submit', insertReceptionist.submitForm);

router.post('/login', loginReceptionnist.login);

// Endpoint pour obtenir tous les clients depuis la base de données
router.get('/client', crudClient.getClients);

// Route pour obtenir un client par son ID
router.get('/client/:id_client', crudClient.getClientById);

// Route pour ajouter un nouveau client
router.post('/client', crudClient.addClient);

// Route pour mettre à jour un client
router.put('/client/:id_client', crudClient.updateClient);

// Route pour supprimer un client
router.delete('/client/:id_client', crudClient.deleteClient);

// Ajoutez une route pour renvoyer la page de mise à jour du client
router.get('/updateClient.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'updateClient.html'));
  });


module.exports = router;

