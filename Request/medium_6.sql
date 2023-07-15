--- Afficher le nombre total des réservations par hotel

SELECT h.hotel_name, COUNT(r.id_reservation) AS total_reservations
FROM hotel h
INNER JOIN room rm ON h.id_hotel = rm.id_hotel
INNER JOIN reservation r ON rm.id_reservation = r.id_reservation
GROUP BY h.hotel_name;
