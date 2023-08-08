const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Une liste de comptes d'utilisateurs pour cet exemple
// Remplacez ces valeurs par une base de données réelle dans un environnement de production
const users = [
  { username: 'utilisateur1', password: 'mdp1' },
  { username: 'utilisateur2', password: 'mdp2' },
  // Ajoutez autant de comptes d'utilisateurs que vous le souhaitez
];

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Veuillez fournir un nom d\'utilisateur et un mot de passe' });
  }

  // Vérifier si l'utilisateur existe dans la liste des utilisateurs
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    return res.json({ message: 'Connexion réussie', username });
  } else {
    return res.status(401).json({ message: 'Identifiants invalides' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend en cours d'exécution sur http://localhost:${PORT}`);
});
