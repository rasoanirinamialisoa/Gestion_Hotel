--Afficher la liste des chambres par prix décroissant
SELECT * FROM room INNER JOIN price ON price.id_room = room.id_room                 
ORDER BY price DESC;