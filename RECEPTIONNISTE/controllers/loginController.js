const db = require('../db');

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const query = 'SELECT * FROM receptionist WHERE email = $1 AND password = $2';
    const values = [email, password];
    const result = await db.query(query, values);

    if (result.rows.length === 1) {
      // L'utilisateur est bien connecté, on le redirige vers la page dashboard.html
      res.redirect('/pages/dashboard.html');
    } else {
      // L'email ou le mot de passe est invalide
      res.json({ success: false });
    }
  } catch (err) {
    console.error('Erreur lors de l\'exécution de la requête', err);
    res.json({ success: false });
  }
};

module.exports = {
  login
};
