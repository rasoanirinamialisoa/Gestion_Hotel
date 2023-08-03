const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const routes = require('./router/route');
const app = express();
const port = 4200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Vous devrez également définir le sous-dossier "pages" comme statique pour servir dashboard.html
app.use('/pages', express.static(path.join(__dirname, 'public', 'pages')));
app.use('/', routes);



app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
