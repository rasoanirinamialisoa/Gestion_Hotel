SELECT c.*
FROM client c
INNER JOIN payment p ON c.id_client = p.client_id
GROUP BY c.id_client
HAVING SUM(p.amount_paid) < SUM(p.amount_due);
