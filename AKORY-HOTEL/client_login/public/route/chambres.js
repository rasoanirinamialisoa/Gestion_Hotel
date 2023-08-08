// Récupérer toutes les chambres
router.get('/chambres', async (req, res) => {
    try {
      const queryResult = await pool.query('SELECT * FROM room');
      const chambres = queryResult.rows;
      res.json(chambres);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des chambres' });
    }
  });
// Récupérer toutes les chambres
router.get('/chambres', async (req, res) => {
    try {
      const queryResult = await pool.query('SELECT * FROM room');
      const chambres = queryResult.rows;
      res.json(chambres);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des chambres' });
    }
  });
    