-- Afficher chaque client, et le nombre de fois où il a annulé une reservation

SELECT c.name, COUNT(r.id_reservation) AS cancellations
FROM client c
INNER JOIN reservation r ON c.id_client = r.id_client
WHERE r.is_cancelled = true
GROUP BY c.name;
