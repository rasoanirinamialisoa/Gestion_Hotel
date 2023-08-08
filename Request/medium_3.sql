-- Afficher la liste des chambres qui seront libres demain
SELECT *
FROM room
WHERE id_room IN (
    SELECT r.id_room
    FROM room r
    LEFT JOIN reservation res ON r.id_reservation = res.id_reservation
    WHERE (res.date_arrived > CURRENT_DATE + INTERVAL '1 day' OR res.leaving_date < CURRENT_DATE + INTERVAL '2 days')
       OR res.id_reservation IS NULL
);

