const db = require('../db'); // Assurez-vous d'importer votre module de communication avec la base de données

const getHotelsBySearch = async (req, res) => {
  const { location, checkIn, checkOut, roomType } = req.query;

  const query = `
    SELECT h.*
    FROM hotel h
    WHERE h.location = $1
      AND $2 BETWEEN h.available_from AND h.available_to
      AND $3 BETWEEN h.available_from AND h.available_to
      AND h.room_type = $4;
  `;

  try {
    const hotels = await db.query(query, [location, checkIn, checkOut, roomType]);
    res.json(hotels);
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getHotelsBySearch
};
