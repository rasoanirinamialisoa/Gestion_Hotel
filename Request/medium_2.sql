--Afficher combien de fois le client a reservé dans nos hotels (tout hotel confondu)

SELECT c.name, c.last_name, COUNT(r.id_reservation) AS total_reservations
FROM client c
INNER JOIN reservation r ON c.id_client = r.id_client
WHERE c.id_client = 2
GROUP BY c.name, c.last_name;
