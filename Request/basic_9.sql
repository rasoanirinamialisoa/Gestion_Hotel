SELECT COUNT(*) AS reservation_count
FROM reservation r
INNER JOIN client c ON r.client_id = c.id_client
WHERE c.name = 'Nantenaina'
  AND r.date_arrived >= '<date_debut>'
  AND r.leaving_date <= '<date_fin>';