// controller.js
const db = require('../db');

// execute-query-4
const basic2 = (req, res) => {
  const query = `
    SELECT r.first_name, r.last_name, r.email, r.work_contact, h.hotel_name
    FROM receptionist r
    INNER JOIN hotel h ON r.id_hotel = h.id_hotel;
  `;

  db.query(query)
    .then(receptionists => {
      res.json(receptionists.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

// execute-query-5
const medium4 = (req, res) => {
  const query = `
    SELECT p.payment_date, p.amount_paid, p.number_night, p.room_occupied, p.deadline_payment, e.first_name, e.last_name
    FROM payment p
    INNER JOIN receptionist e ON p.id_employee = e.id_employee;
  `;

  db.query(query)
    .then(payments => {
      res.json(payments.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

// execute-query-6

const basic71 = (req, res) => { // client qui ne paye pas
  const query = `
  SELECT c.name, c.last_name,c.principal_contact, c.address, c.email
  FROM client c
  INNER JOIN payment p ON p.id_client = c.id_client
  WHERE p.total_amount_status = false;
  `;

  db.query(query)
    .then(payments => {
      res.json(payments.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

const basic72 = (req, res) => { // client qui paye
  const query = `
  SELECT c.name, c.last_name,c.principal_contact, c.address, c.email
  FROM client c
  INNER JOIN payment p ON p.id_client = c.id_client
  WHERE p.total_amount_status = true;
  `;

  db.query(query)
    .then(payments => {
      res.json(payments.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

const basic81 = (req, res) => {
  const query = `
    SELECT SUM(p.amount_paid) AS total_mobile_money_payments
    FROM payment p
    INNER JOIN payment_method pm ON pm.id_payment_method = pm.id_payment_method
    WHERE pm.mobile_money = 't';
  `;

  db.query(query)
    .then(result => {
      const totalMobileMoneyPayments = result.rows[0].total_mobile_money_payments;
      res.json({ total_mobile_money_payments: totalMobileMoneyPayments });
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

const basic9 = (req, res) => {
  const name = req.body.name;
  const dateArrived = req.body.date_arrived;
  const leavingDate = req.body.leaving_date;

  const query = `
    SELECT COUNT(*) AS reservation_count
    FROM reservation r
    INNER JOIN client c ON r.id_client = c.id_client
    WHERE c.name = $1
      AND r.date_arrived >= $2
      AND r.leaving_date <= $3;
  `;

  db.query(query, [name, dateArrived, leavingDate])
    .then(result => {
      const reservationCount = result.rows[0].reservation_count;
      res.json({ reservation_count: reservationCount });
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

const basic10 = (req, res) => {
  const province_name = req.body.province_name;

  const query = `
    SELECT h.hotel_name, h.address
    FROM hotel h
    INNER JOIN province_available pa ON h.id_province = pa.id_province
    WHERE pa.province_name = $1;
  `;

  db.query(query, [province_name])
    .then(result => {
      res.json(result.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

const medium8 = (req, res) => {
  const query = `
    SELECT h.hotel_name, h.address, COUNT(r.id_room) AS total_rooms
    FROM hotel h
    LEFT JOIN room r ON h.id_hotel = r.id_hotel
    GROUP BY h.hotel_name, h.address;
  `;

  db.query(query)
    .then(result => {
      res.json(result.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

const medium9 = (req, res) => {
  const query = `
    SELECT r.*
    FROM room r
    INNER JOIN reservation res ON r.id_reservation = res.id_reservation
    WHERE CURRENT_DATE BETWEEN res.date_arrived AND res.leaving_date;
  `;

  db.query(query)
    .then(result => {
      res.json(result.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

// generalController.js



const medium7 = (req, res) => {
  const query = `
    SELECT c.name, COUNT(r.id_reservation) AS cancellations
    FROM client c
    INNER JOIN reservation r ON c.id_client = r.id_client
    WHERE r.is_cancelled = true
    GROUP BY c.name;
  `;

  db.query(query)
    .then(result => {
      res.json(result.rows);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
};


module.exports = {
  basic2,
  medium4,
  basic71,
  basic72,
  basic81,
  basic9,
  basic10,
  medium8,
  medium9,
  medium7
};
