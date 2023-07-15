--Afficher le nombre total de réservation par type de chambre (par exemple : VIP : 30 reservations, Simple : 40 reservations...)

SELECT room.room_type, COUNT(reservation.id_reservation) AS total_reservations
FROM room
LEFT JOIN reservation ON room.id_room = reservation.id_reservation
GROUP BY room.room_type;
