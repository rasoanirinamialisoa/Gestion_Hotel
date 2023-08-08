const db = require('../db');

const getReservationsForClient = async (req, res) => {
    try {
      const {name} = req.body;
      const query = `
        SELECT reservation.date_arrived, reservation.leaving_date, reservation.number_of_person, client.name
        FROM reservation
        INNER JOIN client ON reservation.id_client = client.id_client
        WHERE client.name = $1;
      `;
  
      const result = await db.query(query, [name]);
      res.json(result.rows);
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      res.sendStatus(500);
    }
  };
  
  module.exports = {
    getReservationsForClient
  };
  

