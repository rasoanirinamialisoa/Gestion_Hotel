--Afficher la liste des réservations en commençant par la plus récente, pour un hotel donné

SELECT r.*
FROM reservation r
INNER JOIN room rm ON r.id_reservation = rm.id_reservation
INNER JOIN hotel h ON rm.id_hotel = h.id_hotel
WHERE h.hotel_name = 'Akory hotel Majunga'
ORDER BY r.date_arrived DESC;
