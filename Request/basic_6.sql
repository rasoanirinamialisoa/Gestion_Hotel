-- Afficher la liste des réservations d'un client donné

SELECT reservation.*, name
FROM reservation
INNER JOIN client ON reservation.id_client = client.id_client
WHERE client.name = 'Daniel' OR client.name = 'Maria';
