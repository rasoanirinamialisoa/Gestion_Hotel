--Afficher la liste des chambres dont la description correspond à des mots-clés données 
SELECT *
FROM room INNER JOIN room_features
 ON room_features.id_features = room.id_features WHERE mot_clé = true;