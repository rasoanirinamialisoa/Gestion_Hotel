--Afficher combien de fois le client a reservé dans nos hotels (tout hotel confondu)
SELECT COUNT(*) AS nombre_de_reservations
FROM reservation 
WHERE id_client = 1;