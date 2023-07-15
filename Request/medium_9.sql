--Afficher la liste des chambres occupées actuellement

SELECT r.*
FROM room r
INNER JOIN reservation res ON r.id_room = r.id_room
WHERE CURRENT_DATE BETWEEN res.date_arrived AND res.leaving_date;

