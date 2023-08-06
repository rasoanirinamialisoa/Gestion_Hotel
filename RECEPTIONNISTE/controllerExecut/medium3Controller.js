const db = require('../db');

const executeQuery = (req, res) => {
  const query = `
  SELECT room.id_room, room.number, room.room_type
  FROM room
  INNER JOIN hotel ON room.id_hotel = hotel.id_hotel
  WHERE hotel.hotel_name = $1
  AND room.room_type = $2;
`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la soumission:', err);
      res.sendStatus(500);
    } else {
      res.json(results.rows);
    }
  });
};

module.exports = { executeQuery };

