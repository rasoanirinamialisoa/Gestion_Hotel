const db = require('../db');

const getBookRecente = async (req, res) => {
  try {
    const { hotel_name } = req.body;
    
    const query = `
      SELECT r.id_reservation, r.date_arrived, r.leaving_date, r.number_of_person
      FROM reservation r
      INNER JOIN room rm ON r.id_reservation = rm.id_reservation
      INNER JOIN hotel h ON rm.id_hotel = h.id_hotel
      WHERE h.hotel_name = $1
      ORDER BY r.date_arrived DESC;
    `;

    const result = await db.query(query, [hotel_name]);
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
    res.sendStatus(500);
  }
};

module.exports = {
  getBookRecente
};
