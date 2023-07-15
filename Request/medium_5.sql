--Afficher la liste des chambres qui répondent à de multiples critères, par ex: y a le wifi, eau chaude, balcon,
--jacuzzi, et qui peuvent contenir X personnes selon le besoin du client

SELECT r.*
FROM room r
INNER JOIN room_features rf ON r.id_features = rf.id_features
WHERE rf.wifi_available = true
  AND rf.hot_water = true
  AND rf.mini_bar = true
  AND r.capacity_room >= 2;
