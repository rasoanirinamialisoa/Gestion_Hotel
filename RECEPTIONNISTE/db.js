const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gestion_hotel',
  password: 'lisa',
  port: 5432,
});

module.exports = pool;
  
  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erreur de connexion à PostgreSQL :', err);
    } else {
      console.log('Connecté à PostgreSQL' );
      done();
    }
  });