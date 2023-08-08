const db = require('../db');

const getClientPaid = async (req, res) => {
  try {

    const {total_amount_status} = req.body;
    const query = `
      SELECT c.id_client, c.name, c.last_name, c.principal_contact
      FROM client c
      INNER JOIN payment p ON p.id_client = c.id_client
      WHERE p.total_amount_status = $1;
    `;

    const result = await db.query(query, [total_amount_status]);
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
    res.sendStatus(500);
  }
};

module.exports = {
  getClientPaid
};
