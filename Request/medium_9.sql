--Afficher la liste des chambres occupées actuellement
SELECT id_room, number FROM room WHERE id_reservation IS NOT NULL;
