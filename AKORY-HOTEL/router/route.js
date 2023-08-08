const express = require('express');
const router = express.Router();
const controller = require('../controllers/searchHotel'); // Assurez-vous d'importer correctement le module de contrôleur

// Route pour la recherche d'hôtels
router.get('/execute-custom-query', controller.getHotelsBySearch);

module.exports = router;
