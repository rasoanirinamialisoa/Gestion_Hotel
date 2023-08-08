--Afficher la liste des chambres occupées actuellement
SELECT r.number, r.room_type, r.capacity_room
FROM room r
INNER JOIN reservation res ON r.id_reservation = res.id_reservation
WHERE CURRENT_DATE BETWEEN res.date_arrived AND res.leaving_date;
