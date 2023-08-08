const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
const port = 4200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration pour servir des fichiers statiques depuis le dossier /public
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
