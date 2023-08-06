const express = require('express');
const router = express.Router();
const { executeQuery } = require('../controllerExecut/medium3Controller');

// Route pour afficher le formulaire
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route pour exécuter la requête
router.post('/execute-query', executeQuery);

module.exports = router;
