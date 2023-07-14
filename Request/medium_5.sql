--Afficher la liste des chambres qui répondent à de multiples critères, par ex: y a le wifi, eau chaude, balcon,
--jacuzzi, et qui peuvent contenir X personnes selon le besoin du client
SELECT *
FROM room
INNER JOIN room_features ON room_features.id_features = room.id_features
WHERE room_features.critere = true/false AND room_features.critere1 = 
true/false;--with critere and critere1 can be change
--true/false is a choice you can choose true or false  