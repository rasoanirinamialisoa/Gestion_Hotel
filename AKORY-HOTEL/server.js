const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./router/route');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes); // Montez les routes

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port http://localhost:${PORT}`);
});
