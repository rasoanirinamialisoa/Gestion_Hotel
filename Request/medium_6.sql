--- Afficher le nombre total des réservations par hotel

SELECT h.hotel_name, COUNT(DISTINCT r.id_room) AS total_reservations
FROM reservation res
JOIN room r ON r.id_room = r.id_room
JOIN hotel h ON r.id_hotel = h.id_hotel
WHERE res.is_cancelled = false
GROUP BY h.hotel_name
ORDER BY total_reservations DESC;
