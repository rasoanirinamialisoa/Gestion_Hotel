const db = require('../db');

// Gestion de la soumission du formulaire
const submitForm = (req, res) => {
  const { first_name, last_name, password, email, work_contact } = req.body;

  // Insérer les données du formulaire dans la base de données
  const query = 'INSERT INTO receptionist (first_name, last_name, password, email, work_contact) VALUES ($1, $2, $3, $4, $5)';
  const values = [first_name, last_name, password, email, work_contact];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error('Erreur lors de l\'insertion dans la base de données :', error);
      res.status(500).send('Une erreur est survenue lors de l\'envoi du formulaire.');
    } else {
      // Ajouter le paramètre "success=true" à l'URL pour afficher la notification
      res.redirect('/?success=true');
    }
  });
};

module.exports = {
  submitForm
};
