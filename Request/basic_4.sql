--Afficher une liste des rooms d'un type donné (chambre simple, twin, vip...), dans un hotel donné
SELECT room.id_room, room.room_type
FROM room
INNER JOIN hotel ON room.id_hotel = hotel.id_hotel
WHERE hotel.hotel_name = hotel_name--this hotel name is a parametre it can be change
AND room.room_type = room_type--this room type is parametre it can be change;
