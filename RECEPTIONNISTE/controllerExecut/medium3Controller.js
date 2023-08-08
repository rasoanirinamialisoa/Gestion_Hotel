const db = require('../db');

const executeQuery = async (req, res) => {
  try {
    const { hotel_name, room_type } = req.body;

    const query = `
      SELECT room.id_room, room.number, room.room_type, hotel.hotel_name
      FROM room
      INNER JOIN hotel ON room.id_hotel = hotel.id_hotel
      WHERE hotel.hotel_name = $1
      AND room.room_type = $2;
    `;

    const result = await db.query(query, [hotel_name, room_type]);
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
    res.sendStatus(500);
  }
};

module.exports = {
  executeQuery
};
