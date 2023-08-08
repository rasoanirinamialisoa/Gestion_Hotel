--Afficher le nombre de réservations effectuées par un client donné durant une période donnée

SELECT COUNT(*) AS reservation_count
FROM reservation r
INNER JOIN client c ON r.id_client = c.id_client
WHERE c.name = 'Linda'
  AND r.date_arrived >= '2022-01-01'
  AND r.leaving_date <= '2023-10-09';
