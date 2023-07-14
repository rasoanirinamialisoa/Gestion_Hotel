--Afficher le nombre total de réservation par type de chambre (par exemple : VIP : 30 reservations, Simple : 40 reservations...)
SELECT room_type, COUNT(*) AS TotalReservations
FROM reservation INNER JOIN room ON reservation.id_reservation = room.id_reservation               
GROUP BY room_type;